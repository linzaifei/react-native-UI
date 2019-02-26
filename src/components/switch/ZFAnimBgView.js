import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
} from 'react-native';

import PropTypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,
    Group,
    LinearGradient,
}=ART;

export default class ZFAnimBgView extends Component {

    static propTypes = {
        onColor: PropTypes.string.isRequired,/** 开关开启颜色 */
        offColor: PropTypes.string.isRequired,/** 开关关闭颜色 */
        strokeWidth:PropTypes.number,
        Size: PropTypes.object,/** 开关关闭颜色 */
    }


    static defaultProps = {
        isOn : false,
        onColor: '#634fc9',
        offColor: '#ecf0f1',
        strokeWidth:1,
    }

    constructor(props) {
        super(props);


    }




    render() {
        const {
            strokeWidth,
            onColor,
            offColor,
            Size,
        }=this.props;


        const {width,height} = Size;
        // var radius = bgHeight/2.0;
        //M20 20 80 20 A10 10 0 0 1 80 40 L20 40 A10 10 0 0 1 20 20
        // var reslut = `M${radius/2} ${strokeWidth} L${bgWidth} ${strokeWidth} A${radius} ${radius} 0 0 1 ${bgWidth} ${bgHeight} L${radius} ${bgHeight} A${radius} ${radius} 0 0 1 ${radius/2} ${strokeWidth}`
        var path = new Path().moveTo(0,0).lineTo(width,0).lineTo(width,height).lineTo(0,height).lineTo(0,0);
        // path.push(reslut)

        var color = [onColor,offColor];

        var linearGradient = new LinearGradient(color,
            `0`, `${height/2}`, `${width}`, `${height/2}`
        )

        // var path1 = new Path().moveTo(radius,radius/1.5).lineTo(bgHeight,radius);


        return (
            <Group>

                <Shape
                    d={path}
                    stroke={color[0]}
                    fill={linearGradient}
                    strokeWidth={0}
                />
            </Group>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});