import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    Animated,
    ART,
    Easing,
} from 'react-native';
import Proptypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,
}=ART;

import ZFLineView from  '../progress/ZFLineView'
const  AnimLineView = Animated.createAnimatedComponent(ZFLineView)
export default class ZFLoaddingBar extends Component {

    static propTypes={
        progressStyle:ViewPropTypes.style,/**  */
        strokeCap:Proptypes.oneOf(['butt','round']),/** 进度条是直角还是圆角 默认圆角 round */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认10  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        animTime:Proptypes.number,/** 动画时间 */
    }

    static defaultProps={
        strokeCap:'round',
        strokeWidth:10,
        progressBaseColor:'#ebeef5',
        progressColor:'#e54d42',
        animTime:2000,
    }

    constructor(props) {
        super(props);
        this.state={
            startLocation:new Animated.Value(0),
            width:100,
        }
    }

    componentDidMount(){
        this.startAnimation();
    }

    startAnimation(){
        var self = this;
        const {
            animTime
        }=this.props
        Animated.loop(
            Animated.timing(self.state.startLocation,{
                toValue:1,
                duration:animTime,
                easing:Easing.linear
            })
        ).start(()=>{
            self.state.startLocation.setValue(0)
        })
    }


    render() {
        const {
            startLocation,
            width,

        }=this.state;
        const {
            strokeWidth,
            progressBaseColor,
            progressStyle,
            progressColor,
        }=this.props;
        return (
           <View style={{
               ...progressStyle,
               flex:1,
               overflow:'hidden',
           }} onLayout={(e)=>{
               this.setState({
                   width:e.nativeEvent.layout.width,
               })
           }}>
               <Surface width={width} height={strokeWidth} style={{}}>
                   <AnimLineView {...this.props} progressColor={progressBaseColor} endLocation={width-strokeWidth/2} />
                   <AnimLineView {...this.props} startLocation={startLocation.interpolate({
                       inputRange:[0,1],
                       outputRange:[-50,width]
                   })} endLocation={startLocation.interpolate({
                       inputRange:[0,1],
                       outputRange:[0,width+50]
                   })} progressColor={progressColor}  />
               </Surface>
           </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});