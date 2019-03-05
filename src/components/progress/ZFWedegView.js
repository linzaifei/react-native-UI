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
    RadialGradient,
}=ART;

const CIRCLE = Math.PI * 2;
/** 画path */

export default class ZFWedegView extends Component {

    static propTypes= {
        type:Proptypes.oneOf(['circle','sector']),/** 当前类型默认圆弧 */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        direction:Proptypes.oneOfType(['clockwise','counter-clockwise']),/** 旋转方向 */
        startAngle:Proptypes.number,/** 开始角度 */
        endAngle:Proptypes.number,/** 结束角度 */
        radius: Proptypes.number, /** 圆弧半径 */
        strokeWidth: Proptypes.number, /** 圆弧宽度 */

    }

    static defaultProps={
        strokeWidth: 2,
        radius: 50,
        progressColor: '#485759',
        startAngle:0,
        endAngle:240,
        direction:'clockwise',
        type:'circle',
    }

    drawPath(X,Y,startAngle,endAngle,radius,direction,type) {

        var startAng = startAngle *CIRCLE /360;
        var endAng = endAngle *CIRCLE/360;

        if (endAng - startAng >= CIRCLE){
            endAng = CIRCLE + endAng % CIRCLE;
        }

        // console.log('startAng = '+startAng)
        // console.log('endAng = '+endAng)

        const angle =
            startAng > endAng
                ? CIRCLE - startAng + endAng
                : endAng - startAng;

        // console.log('angle = '+angle)

        if (angle >=CIRCLE){
            return `M${X+radius} ${Y} A${radius} ${radius} 0 0 1 ${X+radius} ${radius *2+Y} A${radius} ${radius} 0 0 1 ${radius+X} ${Y}`
        }

        const directionFactor = direction === 'counter-clockwise' ? -1 : 1;
        endAng *= directionFactor;
        startAng *= directionFactor;
        const arcFlag = angle > Math.PI ? 1 : 0;
        const reverseFlag = direction === 'counter-clockwise' ? 0 : 1;

        if (type == 'circle'){
            return `M${X+radius * (1 + Math.sin(startAng))} ${Y + radius * (1- Math.cos(startAng))}
          A${radius} ${radius} 0 ${arcFlag} ${reverseFlag} ${X+
            radius * (1 + Math.sin(endAng))} ${Y+radius *(1 - Math.cos(endAng)) }`;
        }else if(type == 'sector'){
            return `M${X+radius * (1 + Math.sin(startAng))} ${Y + radius * (1- Math.cos(startAng))}
          A${radius} ${radius} 0 ${arcFlag} ${reverseFlag} ${X+
            radius * (1 + Math.sin(endAng))} ${Y+radius *(1 - Math.cos(endAng))} L${radius} ${radius} L${X+radius * (1 + Math.sin(startAng))} ${Y + radius * (1- Math.cos(startAng))}`
        }
    }


    render() {
        const {
            radius,
            strokeWidth,
            progressColor,
            startAngle,
            endAngle,
            direction,
            type,
        }=this.props;

        var relRadius =  radius-strokeWidth/2;

        var reslut = this.drawPath(
            strokeWidth/2,
            strokeWidth/2,
            startAngle,
            endAngle,
            relRadius,
            direction,type);


        var path = new Path().push(reslut);

        var proptype;

        switch (type){
            case 'circle' :
                var radialGradient =  typeof  progressColor == 'string'?progressColor : progressColor[0];
                proptype={
                    stroke:radialGradient,
                    strokeWidth:strokeWidth,
                }
                break;
            case 'sector':
                var radialGradient =  typeof  progressColor == 'string'?progressColor : new RadialGradient(progressColor,relRadius, relRadius, relRadius, relRadius, relRadius, relRadius);
                proptype={
                    fill:radialGradient,
                    strokeWidth:strokeWidth,
                }
                break;
        }

        return (
            <Shape
                d={path}
                {...proptype}
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});