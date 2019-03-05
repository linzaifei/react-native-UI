import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    ART,
    Easing,
} from 'react-native';
import Proptypes from 'prop-types'
import  ZFWedegView from '../progress/ZFWedegView'

const {
    Surface,
    Shape,
    Path,
}=ART;

const  AnimationWedegView = Animated.createAnimatedComponent(ZFWedegView)

export default class ZFLoaddingCircle extends Component {

    static propTypes={
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        radius:Proptypes.number,/** 半径 */
        type:Proptypes.oneOf(['circle','sector']),/** 默认 default  */
        animTime:Proptypes.number,/** 动画时间 */
        angle:Proptypes.number,/** 角度 */
        showProgress:Proptypes.bool,/**  */
        children:Proptypes.node,
    }

    static defaultProps={
        strokeWidth:2,
        progressBaseColor:'#ebeef5',
        progressColor:'#e54d42',
        radius:50,
        type:'circle',
        animTime:2000,
        angle:60,
        showProgress:false,
    }

    constructor(props) {
        super(props);
        this.state={
            rotatengle:new Animated.Value(0),

        }
    }

    componentDidMount(){
        this.startAnimation()
    }
    componentWillUnmount(){
        console.log('======销毁了')
    }
    startAnimation(){
        var self = this;
        const {
            animTime
        }=this.props
        Animated.loop(
            Animated.timing(self.state.rotatengle,{
                toValue:1,
                duration:animTime,
                easing:Easing.linear
            }),
        ).start(()=>{
            self.state.rotatengle.setValue(0)
        })
    }

    render() {
        const {
            strokeWidth,
            progressBaseColor,
            progressColor,
            radius,
            type,
            angle,
            showProgress,
            children,
        }=this.props;
        const {rotatengle} =this.state;
        const width = strokeWidth+radius*2;
        return (
            <View>
                <Surface width={width} height={width} style={{}}>
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
                        type={type}
                        startAngle={rotatengle.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,360],
                        })}
                        endAngle={rotatengle.interpolate({
                            inputRange:[0,1],
                            outputRange:[angle,360+angle],
                        })}
                    />
                 </Surface>
                {
                    showProgress && type == 'circle'? <View style={{
                        width: width,
                        height: width,
                        position:'absolute',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        {children ?children:
                            <Text style={{
                                color:progressColor,
                                fontSize:parseInt(radius/3),
                                textAlign:'center',
                            }}>加载中...</Text>
                        }
                    </View>:null
                }
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});