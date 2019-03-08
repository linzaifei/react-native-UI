import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Animated,
    Text,
    PanResponder,
    ViewPropTypes,
    ART,
} from 'react-native';
import Proptypes from 'prop-types'
import ZFWedegView from "../progress/ZFWedegView";
const AnimationWedegView = Animated.createAnimatedComponent(ZFWedegView);
const {
    Surface,
    Shape,
    Path,
    Group,
}=ART;
export default class ZFSliderCirle extends Component {

    static propTypes= {

        progressStyle:ViewPropTypes.style,/**  */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        progress:Proptypes.number,/** 进度 */
        radius:Proptypes.number,/** 半径 */
        children:Proptypes.node,/** 子试图 */

        disabled:Proptypes.bool,/** 能不能滑动 */
        maximumValue:Proptypes.number,/** 最大值 */
        minimumValue:Proptypes.number,/** 最小值 */
        value:Proptypes.number,/** 当前值 */
        onValueChange:Proptypes.func,/** 在用户拖动滑块的过程中不断调用此回调 */
        tagStyle:ViewPropTypes.style,
        sliderStyle:ViewPropTypes.style,

    }

    static defaultProps={
        strokeWidth:8,
        progressColor:'#f37b1d',
        minimumValue:0,
        maximumValue:1,
        value:0,
        radius:50,
    }


    constructor(props) {
        super(props);
        this.noteX = 0

        this.state={
            sliderX:new Animated.Value(1),
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onMoveShouldSetPanResponder:(event,gestureState)=>{
                /** 当垂直滑动的距离<10 水平滑动的距离>10的时候才让捕获事件 */
                console.log('_handleMoveShouldSetPanResponderCapture'+gestureState.dx);
                return gestureState.dy < this.props.radius*2 && Math.abs(gestureState.dx) < this.props.radius*2 ;
            },
            onPanResponderMove:(event,gestureState)=>{
                this._onPanResponderMove(gestureState.dx,this.state.width)
            },
            onPanResponderRelease: (evt, gestureState) => {
                /** 用户放开了所有的触摸点，且此时视图已经成为了响应者。 一般来说这意味着一个手势操作已经成功完成。*/
                // this.panResponderEnd(gestureState.dx)
                this.noteX=null;
            },
            onPanResponderTerminate: (evt, gestureState) => {
                /** 另一个组件已经成为了新的响应者，所以当前手势将被取消。 */
                this.noteX=null;
            },
        })

    }
    _onPanResponderMove(dx,width){
        // console.log('_onPanResponderMove'+gestureState.dx)
        // console.log('_onPanResponderMove'+this.state.sliderX._value)
        const {
            sliderX,
        }=this.state;
        const {
            onValueChange,
            disabled,
            maximumValue,
        }=this.props;

        if(!disabled){
            if (this.noteX === null){
                this.noteX = sliderX._value;
            }
            /** 向右滑动值小于0 最大值为最右边 0 */
            let scrollX = Math.max(this.noteX + dx, 1)
            // console.log('scrollX====='+scrollX)
            // var value = (scrollX / parseFloat(width-10)).toFixed(2) * maximumValue;
            // onValueChange&&onValueChange(value);
            this.state.sliderX.setValue(
                scrollX,
            );
        }
    }


    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){
        // const {
        //     maximumValue,
        // }=this.props;
        //
        // // console.log('nextProps===='+nextProps.value)
        // // console.log('props===='+this.props.value)
        //
        // if (nextState.width !=this.state.width
        //     ||nextProps.value != this.props.value
        // ){
        //     this.noteX =  nextProps.value / parseFloat(maximumValue) *nextState.width;
        //     this._onPanResponderMove(0 ,nextState.width)
        //     return true;
        // }

        return false;
    }


    render() {

        console.log('=====刷新界面')
        const {
            strokeWidth,
            tagStyle,
            children,
            sliderStyle,
            progressBaseColor,
            progressColor,
            radius,
        }=this.props;
        const {
            sliderX,

        }=this.state;

        var width = radius * 2;

        return (
            <View style={{
                ...styles.container,
                ...sliderStyle,
            }} >
                <Surface width={width} height={width} >
                    <ZFWedegView
                        radius={radius}
                        strokeWidth={strokeWidth}
                        progressColor={progressBaseColor}
                        endAngle={360}
                    />
                    <AnimationWedegView
                        radius={radius}
                        strokeWidth={strokeWidth}
                        progressColor={progressColor}
                        type={'circle'}
                        startAngle={0}
                        endAngle={sliderX.interpolate({
                            inputRange:[0,1000],
                            outputRange:[0,360],
                        })}
                    />
                </Surface>
                <Animated.View style={{
                    ...styles.tagStyle,
                    ...tagStyle,
                    position:'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    left:radius-strokeWidth,
                    top:-strokeWidth/2,
                    transform :[
                        {
                            translateX:sliderX,
                        }
                    ]
                }} {...this._panResponder.panHandlers}>
                    {children}
                </Animated.View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex:1,
    },
    tagStyle:{
        width:15,
        height:15,
        borderRadius:7.5,
        backgroundColor:'red',
    }
});