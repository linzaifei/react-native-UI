import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    ViewPropTypes,
    Easing,
} from 'react-native';

import Proptypes from 'prop-types'

import ZFCirleProgressView from './ZFCirleProgressView'
import  ZFLineProgressView from './ZFLineProgressView'
import ZFWaveView from './ZFWaveView'
const AnimatedCirleProgress = Animated.createAnimatedComponent(ZFCirleProgressView);
const AnimationLineProgress = Animated.createAnimatedComponent(ZFLineProgressView);
const AnimationWaveView = Animated.createAnimatedComponent(ZFWaveView);

export default class ZFAnimationProgress extends Component {

    static propTypes={
        type:Proptypes.oneOf(['line','circle','sector','wave']),/** 进度条类型 */
        strokeCap:Proptypes.oneOf(['butt','round']),/** 进度条是直角还是圆角 默认圆角 round 用于条形进度条 */

        progressStyle:ViewPropTypes.style,/** 用于进度条表框样式 */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        showProgress:Proptypes.bool,/** 是否显示进度  默认false */
        progress:Proptypes.number,/** 进度 */
        radius:Proptypes.number,/** 半径 */
        children:Proptypes.node,/** 子试图 针对于 circle */

        rightView:Proptypes.element,/** 右视图 */
        leftView:Proptypes.element,/** 右视图 */

    }

    static defaultProps={
        type:'line',
    }


    constructor(props){
        super(props)
        this.state={
            progress1:new Animated.Value(0),
        }
    }

    componentDidMount(){
        this.startAnimation(this.props.progress)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.progress != this.props.progress) {
            this.startAnimation(nextProps.progress);
        }
    }

    startAnimation(progress){
        this.state.progress1.setValue(0);
        Animated.parallel([
            Animated.timing(this.state.progress1,{
                toValue:progress,
                easeOut:Easing.linear()
            }),
        ]).start()
    }

    onGetProgressType(){
        var self = this;
        const {
            type,

        }=self.props;
        const {
            progress1,
        }=self.state;

        switch (type){
            case 'circle':
            case 'sector':
                return (
                    <AnimatedCirleProgress {...self.props}  progress={progress1} />
                );
                break;
            case 'wave':
                return(
                    <AnimationWaveView  {...self.props}  progress={progress1}  />
                )
                break;
            default:
                return (
                    <AnimationLineProgress {...self.props} progress={progress1} />
                );
                break;
        }
    }

    render() {
        var self = this;
        const {
            rightView,
            leftView,
        }=self.props;
        return(
            <View style={{
                ...styles.container,
                flex:1,
                flexDirection:'row',
                alignItems:'center',
            }}>
                {leftView}
                {this.onGetProgressType()}
                {rightView}
            </View>
            )
    }


}

var styles = StyleSheet.create({
    container: {}
});