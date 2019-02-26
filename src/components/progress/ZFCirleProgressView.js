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
import ZFWedeg from "./ZFWedeg";


const {
    Surface,
    Shape,
    Path,

}=ART;

export default class ZFCirleProgressView extends Component {

    static propTypes={
        progressStyle:ViewPropTypes.style,/**  */
        strokeWidth:Proptypes.number,/** 进度条宽度 默认15  */
        progressBaseColor:Proptypes.string,/** 进度条底部颜色  */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        progress:Proptypes.number,/** 进度 */
        radius:Proptypes.number,/** 半径 */
        type:Proptypes.oneOf(['circle','fan']),/** 默认 default  */
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
                    <ZFWedeg
                        progress={1}
                        progressWidth={strokeWidth}
                        progressColor={progressBaseColor}
                        radius={radius}
                    />
                    <ZFWedeg
                        progress={progress}
                        progressWidth={type == 'circle'? strokeWidth:2}
                        progressColor={progressColor}
                        fillColor={progressColor}
                        fan={type == 'circle'? false:true}
                        radius={radius}
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