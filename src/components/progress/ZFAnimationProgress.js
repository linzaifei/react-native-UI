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

    }


    onGetProgressType(){
        var self = this;
        const {
            type,
        }=self.props;

        switch (type){
            case 'circle':
            case 'sector':
                return (
                    <ZFCirleProgressView {...self.props}/>
                );
                break;
            case 'wave':
                return(
                    <ZFWaveView  {...self.props}    />
                )
                break;
            default:
                return (
                    <ZFLineProgressView {...self.props}  />
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