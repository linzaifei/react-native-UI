import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
} from 'react-native';

import Proptypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,
    Group,
    LinearGradient,
}=ART;

export default class ZFWedeg extends Component {

    static propTypes= {
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        fillColor: Proptypes.string, /** 圆填充颜色 */
        progress: Proptypes.number, /** 圆弧值 */
        startX: Proptypes.number, /** 圆弧开始位置X*/
        startY: Proptypes.number, /** 圆弧开始位置Y*/
        radius: Proptypes.number, /** 圆弧半径 */
        progressWidth: Proptypes.number, /** 圆弧宽度 */
        fan:Proptypes.bool,/** 是否是扇形 */

    }

    static defaultProps={
        progressWidth: 2,
        progress: 0.3 ,
        radius: 50,
        startX:0,
        startY:0,
        fan:false,
        progressColor: '#485759',
        fillColor:'#485759',
    }

    constructor(props) {
        super(props);

    }


    /** 左半圆 */
    drawLeftCrile(progressAngle){
        const {
            progress,
            startX,
            startY,
            radius,
            progressWidth,
        }=this.props;

        var relStartX = startX==0 ? radius :startX;
        var relStartY = startY==0 ? progressWidth :startY;
        var relRadius = radius - progressWidth;

        if (progressAngle > 180) {
            //log(Tag, '强制 degress -> 180');
            progressAngle = 180;
        }
        let target = [];
        if (progressAngle <= 90) {
            progressAngle = progressAngle * 2 * Math.PI / 360;
            // log( "sin " + Math.sin(degress));
            let endX = relStartX + relRadius * Math.sin(progressAngle);
            let endY = relStartY + relRadius - relRadius * Math.cos(progressAngle);

            console.log('endX='+endX)
            console.log('endY='+endY)
            target.push(endX);
            target.push(endY);
            return target;
        }
        else if (progressAngle <= 180) {
            progressAngle = progressAngle - 90;
            progressAngle = progressAngle * 2 * Math.PI / 360;

            //  log(Tag, "sin " + Math.sin(degress));
            let endX = relStartX + relRadius * Math.cos(progressAngle);
            let endY = relStartY + relRadius + relRadius * Math.sin(progressAngle);
            target.push(endX);
            target.push(endY);
            return target;
        }
        return null;

    }
    //5 * 36 = 180
    /** 右半圆 */
    drawRightCrile(progressAngle){

        const {
            progress,
            startX,
            startY,
            radius,
            progressWidth,
        }=this.props;

        var relStartX = startX==0 ? radius :startX;
        var relStartY = startY==0 ? progressWidth :startY;
        var relRadius = radius - progressWidth;

        let target = [];
        if (progressAngle > 360) {
            progressAngle = 360;
        }
        //6 * 36
        if (progressAngle <= 270) {
            progressAngle = progressAngle - 180;//270-180 = 90
            progressAngle = progressAngle * 2 * Math.PI / 360;
            //  log(Tag, Math.sin(degress));
            let endX =  relStartX - relRadius * Math.sin(progressAngle);
            let endY = relStartY + ( relRadius + relRadius * Math.cos(progressAngle));
            target.push(endX);
            target.push(endY);
            return target;
        } else if (progressAngle <= 360) {
            progressAngle = progressAngle - 270;
            progressAngle = progressAngle * 2 * Math.PI / 360;
            let endX = relStartX - relRadius * Math.cos(progressAngle);
            let endY = relStartY + (relRadius - relRadius * Math.sin(progressAngle));
            target.push(endX);
            target.push(endY);
            return target;
        }

        return null;

    }


    render() {
        const {
            progress,
            startX,
            startY,
            radius,
            progressWidth,
            progressColor,
            fan,
            fillColor,
        }=this.props;

        /** 1. 获取真实半径 */
        var relRadius = radius - progressWidth;
        var relStartX = startX==0 ? radius :startX;
        var relStartY = startY==0 ? progressWidth :startY;

        /** 获取角度 */
        var progressAngle = progress * 360;


        // console.log(progressAngle)
        var arr = this.drawLeftCrile(progressAngle);

        var reslut =`M${relStartX} ${relStartY} A${relRadius} ${relRadius} ${0} ${0} ${1} ${arr[0]} ${arr[1]}`
        //reslut = reslut +`M${arr[0]} ${arr[1]} A${relRadius} ${relRadius} ${0} ${0} ${1} ${arr1[0]} ${arr1[1]}`
        if (progress>0.5){
            var arr1 = this.drawRightCrile(progressAngle);
            reslut = reslut +`A${relRadius} ${relRadius} ${0} ${0} ${1} ${arr1[0]} ${arr1[1]}`
        }

        console.log('====='+reslut)
        var path = new Path();

        var proptype={
            stroke:progressColor,
            strokeWidth:progressWidth,
        }

        if(fan){
            reslut = reslut + `L${radius} ${radius}`;
            proptype={
                fill:progressColor,
                strokeWidth:progressWidth,
            }
            path.close();
        }
        path.push(reslut)



        return (
            <Shape  d ={path}
                    {...proptype}
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});