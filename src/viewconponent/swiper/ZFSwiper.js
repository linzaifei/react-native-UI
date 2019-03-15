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
} from 'react-native';
import Proptypes from 'prop-types'

export default class ZFSwiper extends Component {

    static propTypes={
        children:Proptypes.node.isRequired,
        style:ViewPropTypes.style,
        defaulrIndex: Proptypes.number,
        isLoop:Proptypes.bool,
        direction:Proptypes.oneOf(['horizontal','vertical'])
    }

    static defaultProps={
        defaulrIndex:0,
        isLoop:true,
        direction:'horizontal',
    }

    constructor(props) {
        super(props);
        const {defaulrIndex,isLoop} = this.props;
        this.position = isLoop?defaulrIndex+1:defaulrIndex;
        this.positionValue = new Animated.Value(this.position)
        this.positionValue.addListener(({ value }) => {
            this.position = value;
        });

        this.state={
            layoutWidth:0,
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderGrant: (evt, gestureState) => {
                // 用户手指触碰屏幕，停止动画
                this.positionValue.stopAnimation();
                this.positionValue.setOffset(this.position);
                this.positionValue.setValue(0);
            },
            onMoveShouldSetPanResponder:(event,gestureState)=>{
                /** 当垂直滑动的距离<10 水平滑动的距离>10的时候才让捕获事件 */
                console.log('_handleMoveShouldSetPanResponderCapture'+gestureState.dx);
                return  Math.abs(gestureState.dx) > 100;
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

    // shouldComponentUpdate() {
    //     return false;
    // }
    componentDidMount(){
        const result = this.position ;
        this.scrollTo(result);
    }

    _onPanResponderMove(gestureState){
        const {
            direction,
        }=this.props;
        const {
            layoutWidth,
        }=this.state;
        const distance = direction=='horizontal'? gestureState.dx:gestureState.dy;
        const movePosition = distance / -layoutWidth;
        const nextPosition = this.position + movePosition;
        const first = 0;
        const last = React.Children.count(this.contents) - 1;

        console.log('movePosition======'+movePosition);
        console.log('nextPosition======'+nextPosition);
        console.log('last======'+last);

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
            // if (velocity == 0) {
            //     onPress(this.toActive(result));
            // }
        }

        // this.position = result;
        // onScrollEndDrag && onScrollEndDrag(result);

        this.positionValue.flattenOffset();
        this.scrollTo(result);
    }



    scrollTo(position) {
        const { isLoop, animation, onChangeStart, onChangeEnd } = this.props;
        const childrenCount = React.Children.count(this.contents);
        const first = 0;
        const last = childrenCount - 1;

        // position 即将要变化的位置
        const index = this.toActive(position);
        // onChangeStart && onChangeStart(index);

        // 限制超出范围
        position = Math.min(last, Math.max(first, position));

        Animated.spring(this.positionValue, {
            toValue: position,
            friction: 12,
            tension: 50,
        }).start(
            ({ finished }) => {
                if (finished) {
                    // this.position 现在的位置
                    // const index = this.toActive(this.noteX);
                    // onChangeEnd && onChangeEnd(index);

                    // 如果单方向循环轮播，从最后一帧（或者第一帧）无动画跳转到假的最后一帧（或者假的第一帧）
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
        return index;
    };

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

    render() {
        const { style,} = this.props;
        const {layoutWidth} = this.state;

        const items = React.Children.map(this.contents,(item, index) => (
            <Animated.View
                style={{
                    ...styles.item,
                    width: layoutWidth,
                    transform: [{
                        translateX:  this.positionValue.interpolate({
                            inputRange:[index,index+1],
                            outputRange:[0,-layoutWidth]
                        }),
                    }],
                }}
                key={index}
                {...this._panResponder.panHandlers}
            >
                {item}
            </Animated.View>
        ));

        return (
            <View
                style={{
                    ...style,
                    ...styles.container,
                }}
                onLayout={(e)=>{
                    this.setState({
                        layoutWidth: e.nativeEvent.layout.width,
                    })
                }}
            >
                {items}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'grey'
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