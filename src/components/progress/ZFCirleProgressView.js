import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ART,
    ViewPropTypes,
} from 'react-native';

import Proptypes from 'prop-types'
import ZFWedeg from "./ZFWedeg";


const {
    Surface,
    Shape,
    Path,
    Text
}=ART;

export default class ZFCirleProgressView extends Component {

    static propTypes={
        progressStyle:ViewPropTypes.style,/**  */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.string,/** 进度条颜色  */
        showProgress:Proptypes.bool,/** 是否显示进度  默认false */
        progress:Proptypes.number,/** 进度 */
        radius:Proptypes.number,/** 半径 */
        type:Proptypes.oneOf(['circle','fan']),/** 默认 default  */
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

        }
    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){
        return true
    }



    render() {
        const {

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
        }=this.props;
        const pathText = new Path()
            .moveTo(10,30)
            .lineTo(70,30);

        var width = radius * 2;
        return (
            <View style={{
                ...progressStyle,
            }}>
                <Surface width={width} height={width}>
                    <ZFWedeg
                        progress={1}
                        progressWidth={strokeWidth}
                        progressColor={progressBaseColor}
                        radius={radius}
                    />
                    <ZFWedeg
                        progress={progress}
                        progressWidth={strokeWidth}
                        progressColor={progressColor}
                        fillColor={progressColor}
                        fan={type == 'circle'? false:true}
                        radius={radius}
                    />
                    {/*{*/}
                        {/*type == "circle" && showProgress?<Text alignment="center"  strokeWidth={1}  stroke="orange" font={(radius / 2)+ "px"+" Heiti SC"} path={pathText} >{parseInt(progress*100)+"%"}</Text>:null*/}
                    {/*}*/}
                </Surface>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});