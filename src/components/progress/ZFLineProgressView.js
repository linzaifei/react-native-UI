import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ART,
    Text,
    ViewPropTypes,
} from 'react-native';

import Proptypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,
    Group,

}=ART;

import ZFLineView from './ZFLineView'

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
    }

    static defaultProps={
        strokeCap:'round',
        strokeWidth:15,
        progressBaseColor:'#ebeef5',
        progressColor:'#e54d42',
        showProgress:false,
        startLocation:0,
    }


    constructor(props) {
        super(props);
        this.state={
            width:100,
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('nextStatewidth===='+nextState.width)
        // console.log('width===='+this.state.width)
        if (nextState.width == this.state.width){

            return true;
        }
        return false
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
            startLocation,
        }=this.props;

        const {
            width,
        }=this.state;

        if (progress < 0 || progress>1) {
            throw new Error(' progress must >0 && <1');
        }

        // var pathText= new Path()

        var progressInstance = progress*width;
        return (
            <View style={{
                ...progressStyle,
                flex:1,
            }} onLayout={(e)=>{
                this.setState({
                    width:e.nativeEvent.layout.width,
                })
            }} >
                <Surface  width={width} height={strokeWidth} >
                    <Group>
                        <ZFLineView
                            progressColor={progressBaseColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                            startLocation={0}
                            endLocation={width - (strokeCap=='butt'?0: strokeWidth/2)}
                        />
                        <ZFLineView
                            progressColor={progressColor}
                            strokeCap={strokeCap}
                            strokeWidth={strokeWidth}
                            startLocation={0}
                            endLocation={progressInstance}
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