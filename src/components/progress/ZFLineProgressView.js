import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ART,
    Text,
    ViewPropTypes,
    Animated,
    Easing,
} from 'react-native';

import Proptypes from 'prop-types'
import ZFLineView from './ZFLineView'

const {
    Surface,
    Shape,
    Path,
    Group,
}=ART;

const AnimLineView = Animated.createAnimatedComponent(ZFLineView)
export default class ZFLineProgressView extends Component {

    static propTypes={
        progressStyle:ViewPropTypes.style,/**  */
        strokeCap:Proptypes.oneOf(['butt','round']),/** 进度条是直角还是圆角 默认圆角 round */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        showProgress:Proptypes.bool,/** 是否显示进度  默认false */
        startLocation:Proptypes.number,/** 开始位置 */
        progress:Proptypes.number,/** 进度 */
        subWidth:Proptypes.number,/** 自定义宽度 */
        endLocation:Proptypes.number,/** 自定义结束位置 */
    }

    static defaultProps={
        strokeCap:'round',
        strokeWidth:15,
        progressBaseColor:'#ebeef5',
        progressColor:'#e54d42',
        showProgress:false,
        startLocation:0,
        subWidth:0,
        endLocation:0,
    }


    constructor(props) {
        super(props);
        this.state={
            width:100,
            progress1:new Animated.Value(0),
        }

    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('nextStatewidth===='+JSON.stringify(nextState))
        // console.log('nextProps===='+JSON.stringify(nextProps))
        // console.log('width===='+this.state.width)
        // console.log('width===='+nextState.width)
        if (nextState.width != this.state.width){
            return true;
        }
        return false
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



    render() {
        console.log('ZFLineProgressView======刷新界面')
        const {
            strokeCap,
            strokeWidth,
            progressColor,
            progressBaseColor,
            progress,
            progressStyle,
            showProgress,
            subWidth,
            endLocation,
        }=this.props;

        const {
            width,
            progress1,
        }=this.state;

        if (endLocation==0 && (progress < 0 || progress>1)) {
            throw new Error(' progress must >0 && <1');
        }

        var relWidth = subWidth!=0 ?subWidth:width;
        var progressInstance = endLocation!=0 ?endLocation: progress*relWidth;

        return (
            <View style={{
                ...progressStyle,
                flex:1,
            }} onLayout={(e)=>{
                if(subWidth==0){
                    this.setState({
                        width:e.nativeEvent.layout.width,
                    })
                }
            }} >
                <Surface  width={relWidth} height={strokeWidth} >
                    <Group>
                        <ZFLineView
                            progressColor={progressBaseColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                            startLocation={0}
                            endLocation={relWidth - (strokeCap=='butt'?0: strokeWidth/2)}
                        />
                        <AnimLineView
                            progressColor={progressColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                            startLocation={0}
                            endLocation={progress1.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,progressInstance]
                            })}
                        />
                    </Group>
                </Surface>
                {
                    showProgress ?<Text style={{
                        fontSize:strokeWidth/3*2,
                        color:'#fff',
                        position:'absolute',
                        left:progressInstance/2,
                        top:0,
                    }}>{parseInt(progress*100)+"%"}</Text>:null
                }
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});