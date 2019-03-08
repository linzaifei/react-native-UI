import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ART,
    Text,
    Animated,
    ViewPropTypes,
    Easing,
} from 'react-native';

import Proptypes from 'prop-types'
import ZFWedegView from "./ZFWedegView";



const {
    Surface,
    Shape,
    Path,
}=ART;

const AnimWedegView = Animated.createAnimatedComponent(ZFWedegView)
export default class ZFCirleProgressView extends Component {

    static propTypes={
        progressStyle:ViewPropTypes.style,/**  */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        progress:Proptypes.number,/** 进度 */
        radius:Proptypes.number,/** 半径 */
        showProgress:Proptypes.bool,
        type:Proptypes.oneOf(['circle','sector']),/** 默认 default  */
        children:Proptypes.node,/** 子试图 */
    }

    static defaultProps={
        strokeCap:'round',
        strokeWidth:3,
        progressBaseColor:'#ebeef5',
        progressColor:'#e54d42',
        showProgress:false,
        radius:50,
        type:'circle'
    }


    constructor(props) {
        super(props);
        this.state={
            progress1:new Animated.Value(0),
        }
    }

    componentDidMount(){
        this.startAnimation()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.progress != this.props.progress) {
            this.startAnimation();
        }
    }

    startAnimation(){
        this.state.progress1.setValue(0);
        Animated.timing(this.state.progress1,{
            toValue:1,
            easeOut:Easing.linear()
        }).start()
    }

    shouldComponentUpdate(nextProps,nextState){
        return false
    }


    render() {
        console.log('ZFCirleProgressView====刷新了')
        const {
            progress1,
        }=this.state;

        const {
           progress,
            strokeWidth,
            progressColor,
            progressBaseColor,
            progressStyle,
            type,
            radius,
            showProgress,
            children,
        }=this.props;

        if (progress < 0 || progress>1) {
            throw new Error(' progress must >0 && <1');
        }

        var width = radius * 2;
        return (
            <View style={{
                ...progressStyle,
            }}>
                <Surface width={width} height={width}>
                    <ZFWedegView
                        startAngle={0}
                        endAngle={360}
                        progressWidth={strokeWidth}
                        progressColor={progressBaseColor}
                        radius={radius}
                    />
                    <AnimWedegView
                        progressWidth={strokeWidth}
                        progressColor={progressColor}
                        type={type}
                        radius={radius}
                        startAngle={0}
                        endAngle={progress1.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,progress*360],
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
                                fontSize:parseInt(radius/2),
                                textAlign:'center',
                            }}>{parseInt(progress *100) +'%'}</Text>
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