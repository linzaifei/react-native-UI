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
}=ART;
import {starSVG} from './ZFStarInfo'

export default class ZFStarView extends Component {
    static propTypes={
        fill:Proptypes.string,/** 背景颜色 */
        scale:Proptypes.number,/** 尺寸大小 默认为1 */
        stroke:Proptypes.string,/** 星星试图颜色 */
        strokeWidth:Proptypes.number,/** 变宽 */

    }
    static defaultProps={
        scale:1,
        strokeWidth:1,
        stroke:'#666',
        fill:'#fff'
    }

    constructor(props) {

        super(props);


    }


    render() {
        const {
            scale,
            stroke,
            fill,
            strokeWidth,
        }=this.props;
        var path = new Path();
        path.push(starSVG.STAR).close()
        return (
            <Surface width={40 * scale} height={40 * scale}>
                <Shape
                    x={20 * scale} y={ 20 * scale}
                    d={path}
                    strokeWidth={strokeWidth}
                    stroke={stroke}
                    scale={scale}
                    fill={fill}
                />
            </Surface>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});