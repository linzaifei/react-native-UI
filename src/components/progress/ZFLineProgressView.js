import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ART,
    ViewPropTypes,
} from 'react-native';

import Proptypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,
    Group,
    Text
}=ART;


export default class ZFLineProgressView extends Component {

    static propTypes={
        progressStyle:ViewPropTypes.style,/**  */
        strokeCap:Proptypes.oneOf(['butt','round']),/** 进度条是直角还是圆角 默认圆角 round */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.string,/** 进度条颜色  */
        showProgress:Proptypes.bool,/** 是否显示进度  默认false */
        progress:Proptypes.number,/** 进度 */
    }

    static defaultProps={
        strokeCap:'round',
        strokeWidth:15,
        progressBaseColor:'#ebeef5',
        progressColor:'#e54d42',
        showProgress:false,
    }


    constructor(props) {
        super(props);
        this.state={
            width:100,
        }

    }


    render() {

        const {
            strokeCap,
            strokeWidth,
            progressColor,
            progressBaseColor,
            progress,
            progressStyle,
            showProgress,
        }=this.props;

        const {
            width,
        }=this.state;

        if (progress < 0 || progress>1) {
            throw new Error(' progress must >0 && <1');
        }



        var startX = strokeCap=='butt'?0: strokeWidth/2.0;
        var startY = strokeWidth/2.0;

        var progressInstance = progress*width;

        var basePath = new Path()
                        .moveTo(startX,startY)
                        .lineTo(width-startX,startY);
        var subPath = new Path().moveTo(startX,startY).lineTo(progressInstance,startY)

        const pathText = new Path()
                        .moveTo(startX,startY)
                        .lineTo(progressInstance,startY);

        return (
            <View style={{
                ...progressStyle,
                flex:1
            }} onLayout={(e)=>{
                // console.log(e.nativeEvent.layout)
                this.setState({
                    width:e.nativeEvent.layout.width,
                })
            }} >
                <Surface  width={width} height={strokeWidth} >
                    <Group>
                        <Shape
                            d={basePath}
                            stroke={progressBaseColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                        />
                        <Shape
                            d={subPath}
                            stroke={progressColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                        />
                        {
                            showProgress?
                                <Text alignment="center" x={progressInstance/2}   strokeWidth={1} stroke="#fff" font=" 10px Heiti SC" path={pathText} >{parseInt(progress*100)+"%"}</Text>:null
                        }
                    </Group>

                </Surface>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});