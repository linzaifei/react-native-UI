import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    PanResponder,
    Animated,
    ViewPropTypes,
    InteractionManager,
} from 'react-native';
import Proptypes from 'prop-types'

export default class ZFViewPan extends Component {

    static propTypes={
        style:ViewPropTypes.style,
        children:Proptypes.node.isRequired,
        defaultIndex: Proptypes.number,/** 获取当前显示的index 默认0 第一涨*/
        isLoop:Proptypes.bool,/** 是否头尾衔接的循环轮播 */
        direction:Proptypes.oneOf(['horizontal','vertical']), /** 滑动方向*/
        size:Proptypes.number,/** 宽度 */
        autoPlay:Proptypes.bool,/** 是否自动播放 默认 true */
        playDirection:Proptypes.oneOfType(['clockwise','counter-clockwise']),/** 自动播放方向 默认顺时针 */
        intervalTime:Proptypes.number,/** 自动播放间隔 */
        onPress:Proptypes.func,/** 点击当前界面 */
        onChangeEnd:Proptypes.func,/** 滑动结束 */
        onChangeStart:Proptypes.func,/** 滑动开始 */
    }

    static defaultProps={
        defaultIndex:0,
        isLoop:true,
        direction:'horizontal',
        autoPlay:true,
        size:100,
        intervalTime:2000,
        playDirection:'clockwise',
    }

    constructor(props) {
        super(props);
        const {defaultIndex,isLoop} = this.props;
        this.position = isLoop?defaultIndex+1:defaultIndex;
        this.positionValue = new Animated.Value(this.position)
        this.positionValue.addListener(({ value }) => {
            this.position = value;
        });

        this.state={

        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderGrant: (evt, gestureState) => {
                // 用户手指触碰屏幕，停止动画
                this.positionValue.stopAnimation();
                this.positionValue.setOffset(this.position);
                /** 开始滑动的位置 */
                const index = this.toActive(this.position);
                this.props.onChangeStart && this.props.onChangeStart (index);
                this.positionValue.setValue(0);
            },
            onMoveShouldSetPanResponder:(event,gestureState)=>{
                /** 当垂直滑动的距离<10 水平滑动的距离>10的时候才让捕获事件 */
                console.log('_handleMoveShouldSetPanResponderCapture'+gestureState.dx);

                return this.props.direction=='horizontal'? Math.abs(gestureState.dx) > 10:Math.abs(gestureState.dy) > 10;
            },
            onPanResponderMove:(event,gestureState)=>{
                this._onPanResponderMove(gestureState)
            },
            onPanResponderRelease: (evt, gestureState) => {
                /** 用户放开了所有的触摸点，且此时视图已经成为了响应者。 一般来说这意味着一个手势操作已经成功完成。*/
                this._onPanResponderEnd(gestureState)
            },
            onPanResponderTerminate: (evt, gestureState) => {
                /** 另一个组件已经成为了新的响应者，所以当前手势将被取消。 */
                this._onPanResponderEnd(gestureState)
            },
        })
    }

    shouldComponentUpdate() {
        return false;
    }
    componentDidMount(){
        var self = this;
        const {
            intervalTime,
            playDirection,
            autoPlay,
        }=self.props;
        let startTime = null;
        let runTime = null;
        const index =  playDirection == 'clockwise'?1:-1
        self.timer = autoPlay&& setInterval(() => {
            startTime = new Date();
            InteractionManager.runAfterInteractions(() => {
                runTime = new Date();
                if (runTime - startTime < 30 && Number.isInteger(this.position)) {
                    const result = this.position + index;
                    self.scrollTo(result);
                }
            });
        }, intervalTime);

    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    _onPanResponderMove(gestureState){
        const {
            direction,
            size,
        }=this.props;
        const {

        }=this.state;
        const distance = direction=='horizontal'? gestureState.dx:gestureState.dy;
        const movePosition = distance / -size;
        const nextPosition = this.position + movePosition;
        const first = 0;
        const last = React.Children.count(this.contents) - 1;

        // console.log('movePosition======'+movePosition);
        // console.log('nextPosition======'+nextPosition);
        // console.log('last======'+last);

        if (nextPosition >= first && nextPosition <= last) {
            this.positionValue.setValue(movePosition);
        }
    }

    _onPanResponderEnd(gestureState){

        const { direction, onPress } = this.props;
        const velocity = direction == 'horizontal'? gestureState.dx : gestureState.dy;
        const previous = Math.floor(this.position);

        const next = previous + 1;
        const threshold = 5e-7;

        let result;
        if (velocity > threshold) {
            result = previous;
        } else if (velocity < -threshold) {
            result = next;
        } else {
            result = Math.round(this.position);
            if (velocity == 0) {
                onPress && onPress(this.toActive(result));
            }
        }
        this.positionValue.flattenOffset();
        this.scrollTo(result);
    }



    scrollTo(position) {
        const { isLoop, animation, onChangeStart, onChangeEnd } = this.props;
        const childrenCount = React.Children.count(this.contents);
        const first = 0;
        const last = childrenCount - 1;
        if(position == childrenCount){
            position = first
        }



        /**  限制超出范围 */
        position = Math.min(last, Math.max(first, position));

        Animated.spring(this.positionValue, {
            toValue: position,
            friction: 12,
            tension: 50,
        }).start(
            ({ finished }) => {
                if (finished) {
                    /** 获取停止滑动的index */
                    const index = this.toActive(position);
                    onChangeEnd && onChangeEnd(index);
                    /** 如果单方向循环轮播，从最后一帧（或者第一帧）无动画跳转到假的最后一帧（或者假的第一帧） */
                    if (isLoop) {
                        if (position == first) {
                            this.positionValue.setValue(last - 1);
                        } else if (position == last) {
                            this.positionValue.setValue(first + 1);
                        }
                    }
                }
            }
        )
    }
    /** 获取当前index */
    toActive(position) {
        const { isLoop } = this.props;

        if (!isLoop) {
            return position;
        }
        const first = 0;
        const last = React.Children.count(this.contents) - 1;
        let index;

        if (position == first) {
            index = last - 2;
        } else if (position == last) {
            index = first;
        } else {
            index = position - 1;
        }
        return Math.floor(index);
    };

    /** 获取当前子类 */
    contents = (() => {
        const { children, isLoop } = this.props;
        const childrenArray = React.Children.toArray(children);
        const contents = childrenArray;

        if(isLoop){
            const first = React.cloneElement(childrenArray[0]);
            const last = React.cloneElement(childrenArray[childrenArray.length - 1]);
            contents.unshift(last);
            contents.push(first);
        }
        console.log(contents.length)
        return contents;
    })();

    getChildrens(){
        const {size,direction} = this.props;
        const translateDirection = direction== 'horizontal' ? 'translateX' : 'translateY';
        return React.Children.map(this.contents,(item, index) => (
            <Animated.View
                style={{
                    ...styles.item,
                    width:size,
                    transform: [{
                        [translateDirection]:  this.positionValue.interpolate({
                            inputRange:[index,index+1],
                            outputRange:[0,-size]
                        }),
                    }],
                }}
                key={index}
                {...this._panResponder.panHandlers}
            >
                {item}
            </Animated.View>
        ));
    }

    render() {
        const { style,direction} = this.props;
        const stylesWrapper = direction== 'horizontal' ? styles.swiperRow : styles.swiperColumn;
        return (
            <View
                style={[style,stylesWrapper]}
            >
                {this.getChildrens()}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {

    },
    swiperRow:{
        flex:1,
        flexDirection:'row',
    },
    swiperColumn:{
        flex:1,
        flexDirection:'column'
    },
    item: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

/**
 *  // 获取 positionAnimated 的动态值
 this.state.positionAnimated.addListener(({ value }) => {
            console.log('position',value)
            this.position = value;
        });
 * */