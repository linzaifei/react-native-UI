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

export default class ZFSmileView extends Component {
    static propTypes={
        fill:Proptypes.string,/** 背景颜色 */
        scale:Proptypes.number,/** 尺寸大小 默认为1 */
        like:Proptypes.bool,/**  */
    }
    static defaultProps={
        scale:1,
        fill:'#fff',
        like:false,
    }

    constructor(props) {
        super(props);


    }


    render() {
        const {
            scale,
            fill,
            like
        }=this.props;
        var path = new Path();

        path.push(like?starSVG.HAPPY:starSVG.SAD)

        // console.log('==================='+scale)
        return (
            <Surface width={40 * scale} height={40 * scale}>
                <Shape
                    d={path}
                    fill={fill}
                    scale={40 / 1024 * scale}
                />
            </Surface>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});