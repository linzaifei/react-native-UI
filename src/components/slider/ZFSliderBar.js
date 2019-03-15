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

const {
    Surface,
    Shape,
    Path,
    Group,
}=ART;

import ZFLineView from "../progress/ZFLineView";
import ZFDrawText from "./ZFDrawText";

const AnimLineView = Animated.createAnimatedComponent(ZFLineView)
const AnimDrawText= Animated.createAnimatedComponent(ZFDrawText)
export default class ZFSliderBar extends Component {

    static propTypes= {
        disabled:Proptypes.bool,/** 能不能滑动 */
        strokeCap:Proptypes.oneOf(['butt','round']),/** 进度条是直角还是圆角 默认圆角 round */
        strokeWidth:Proptypes.number,/** 进度条宽度 */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        unProgressColor:Proptypes.string,/** 进度条底部颜色  */
        maximumValue:Proptypes.number,/** 最大值 */
        minimumValue:Proptypes.number,/** 最小值 */
        value:Proptypes.number,/** 当前值 */
        onValueChange:Proptypes.func,/** 在用户拖动滑块的过程中不断调用此回调 */
        tagStyle:ViewPropTypes.style,
        children:Proptypes.node,
        sliderStyle:ViewPropTypes.style,
    }

    static defaultProps={
        strokeWidth:8,
        progressColor:'#f37b1d',
        minimumValue:0,
        maximumValue:1,
        unProgressColor:'#ebeef5',
        value:0
    }


    constructor(props) {
        super(props);
        this.noteX = 0

        this.state={
            sliderX:new Animated.Value(1),
            width:100,
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onMoveShouldSetPanResponder:(event,gestureState)=>{
                /** 当垂直滑动的距离<10 水平滑动的距离>10的时候才让捕获事件 */
                console.log('_handleMoveShouldSetPanResponderCapture'+gestureState.dx);
                return gestureState.dy < 10 && Math.abs(gestureState.dx) > 10;
            },
            onPanResponderMove:(event,gestureState)=>{
                this._onPanResponderMove(gestureState.dx,this.state.width)
            },
            onPanResponderRelease: (evt, gestureState) => {
                /** 用户放开了所有的触摸点，且此时视图已经成为了响应者。 一般来说这意味着一个手势操作已经成功完成。*/
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
            strokeWidth,
        }=this.props;

        if(!disabled){
            if (this.noteX === null){
                this.noteX = sliderX._value;
            }
            /** 向右滑动值小于0 最大值为最右边 0 */
            let scrollX = Math.min(Math.max(this.noteX + dx, 1),width-strokeWidth)
            // console.log('scrollX====='+scrollX)
            var value = (scrollX / parseFloat(width-10)).toFixed(2) * maximumValue;
            onValueChange&&onValueChange(value);
            this.state.sliderX.setValue(
                scrollX,
            );
        }
    }


    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){
        const {
            maximumValue,
        }=this.props;

        // console.log('nextProps===='+nextProps.value)
        // console.log('props===='+this.props.value)

        if (nextState.width !=this.state.width
        ||nextProps.value != this.props.value
        ){
            this.noteX =  nextProps.value / parseFloat(maximumValue) *nextState.width;
            this._onPanResponderMove(0 ,nextState.width)
            return true;
        }

        return true;
    }


    render() {

        console.log('=====刷新界面')
        const {
            strokeWidth,
            tagStyle,
            children,
            sliderStyle,
            unProgressColor,
            strokeCap,
            progressColor,
        }=this.props;
        const {
            sliderX,
            width,
        }=this.state;

        // var str = 'M 0.000 10.000 L 11.756 16.180 L 9.511 3.090 L 19.021 -6.180 L 5.878 -8.090 L 0.000 -20.000 L -5.878 -8.090 L -19.021 -6.180 L -9.511 3.090 L -11.756 16.180 L 0.000 10.000'
        // var path = new Path().push(str);
        return (
            <View style={{
                ...styles.container,
                ...sliderStyle,
            }} onLayout={(e)=>{
                this.setState({
                    width:e.nativeEvent.layout.width,
                })
            }} >
                <Surface  width={width} height={strokeWidth}>
                    <Group>
                        <ZFLineView
                            progressColor={unProgressColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                            startLocation={0}
                            endLocation={width - (strokeCap=='butt'?0: strokeWidth/2)}
                        />
                        <AnimLineView
                            progressColor={progressColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                            startLocation={0}
                            endLocation={sliderX}
                        />
                    </Group>
                </Surface>
                <Animated.View style={{
                    ...styles.tagStyle,
                    ...tagStyle,
                    position:'absolute',
                    alignItems:'center',
                    justifyContent:'center',
                    left:-strokeWidth/2,
                    top:-(((tagStyle&&tagStyle.height)?tagStyle.height:styles.tagStyle.height)-strokeWidth)/2,
                    transform :[
                        {
                            translateX:sliderX,
                        }
                    ]
                }} {...this._panResponder.panHandlers}>
                    {
                        children?children:
                            <AnimDrawText value={sliderX.interpolate({
                            inputRange:[0,width-strokeWidth],
                            outputRange:[0,100],
                        })} />
                    }

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
        width:20,
        height:15,
        borderRadius:7.5,
        backgroundColor:'red',
    }
});