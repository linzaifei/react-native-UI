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

export default class ZFWaveView extends Component {

    static propTypes= {
        progressColor: Proptypes.string, /** 圆弧颜色 */
        fillColor: Proptypes.string, /** 圆填充颜色 */
        progress: Proptypes.number, /** 圆弧值 */
        startX: Proptypes.number, /** 圆弧开始位置X*/
        startY: Proptypes.number, /** 圆弧开始位置Y*/
        radius: Proptypes.number, /** 圆弧半径 */
        fan:Proptypes.bool,/** 是否是扇形 */

    }

    static defaultProps={
        progress: 0.5,
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

    wave(startY, fl){
        const a = 2
        const b = 0
        const w = 400
        const h = 30
        const pathBase = new ART.Path()
        pathBase.moveTo(0,startY) // 改变起点为 0,5 。默认为0,0
        for( var i = 0; i <= w / 15; i += 0.1 ){
            var x = i * 15;
            var y = a * Math.cos( i + b )*4 + startY;
            pathBase.lineTo( x, y );
        }
        // pathBase.lineTo(w,h) // 目标点
        // pathBase.lineTo(0, h);
        // pathBase.close();
        return <Shape d={pathBase} stroke={fl}/>
    }


    /** 左半圆 */
    drawLeftCrile(progressAngle){
        const {
            radius,
        }=this.props;

        if (progressAngle > 180) {
            progressAngle = 180;
        }

        console.log('+++++++++++++++'+progressAngle)
        let target = [];

        if (progressAngle <= 90) {
            progressAngle = progressAngle * 2 * Math.PI / 360;

            let endX = radius + radius * Math.sin(progressAngle);
            let endY = radius + radius * Math.cos(progressAngle);
            console.log('endX='+endX)
            console.log('endY='+endY)
            target.push(endX);
            target.push(endY);
            return target;
        }
        else if (progressAngle <= 180) {
            progressAngle = progressAngle - 90;
            progressAngle = progressAngle * 2 * Math.PI / 360;
            let endX = radius + radius * Math.cos(progressAngle);
            let endY = radius - radius * Math.sin(progressAngle);
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
            radius,
        }=this.props;

        progressAngle = progressAngle + 180;

        let target = [];
        if (progressAngle > 360) {
            progressAngle = 360;
        }

        if (progressAngle <= 270) {
            progressAngle = progressAngle - 180;
            progressAngle = progressAngle * 2 * Math.PI / 360;

            let endX =  radius - radius * Math.sin(progressAngle);
            let endY = radius + radius * Math.cos(progressAngle);
            target.push(endX);
            target.push(endY);
            return target;
        } else if (progressAngle <= 360) {
            progressAngle = progressAngle - 270;
            progressAngle = progressAngle * 2 * Math.PI / 360;
            let endX = radius - radius * Math.cos(progressAngle);
            let endY = radius  - radius * Math.sin(progressAngle);
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
        /** 获取角度 */
        var progressAngle = progress * 180;//0.5 * 180 = 90


        var leftArr = this.drawLeftCrile(progressAngle);
        var rightArr = this.drawRightCrile(progressAngle);

        var reslut =`M${radius} ${radius*2} A${radius} ${radius} ${0} ${0} ${0} ${leftArr[0]} ${leftArr[1]}`
        reslut = reslut+ `M${radius} ${radius*2} A${radius} ${radius} ${0} ${0} ${1} ${rightArr[0]} ${rightArr[1]} `

        var path = new Path().close();

        //
        // const a = 2
        // const b = 0
        // const w = 400
        // const h = 30
        // path.moveTo(rightArr[0],rightArr[1]) // 改变起点为 0,5 。默认为0,0
        // for( var i = 0; i <= w / 15; i += 0.1 ){
        //     var x = i * 15;
        //     var y = a * Math.cos( i + b )*4 + 10;
        //     path.lineTo( x, y );
        // }
        // path.lineTo(leftArr[0],leftArr[1])






        var proptype={
            stroke:progressColor,
            strokeWidth:0,
            fill:fillColor,
        }
        path.push(reslut)

        return (

            <Surface width={300} height={400} style={{backgroundColor:'yellow'}} >
                <Group  >
                    <Shape  d ={path}
                            {...proptype}
                    />
                </Group>
            </Surface>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});