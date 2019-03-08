import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
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

export default class ZFLineView extends Component {

    static propTypes={
        strokeCap:Proptypes.oneOf(['butt','round']),/** 进度条是直角还是圆角 默认圆角 round */
        strokeWidth:Proptypes.number,/** 进度条宽度 */
        progressColor:Proptypes.oneOfType([Proptypes.string,Proptypes.array]),/** 进度条颜色  */
        startLocation:Proptypes.number.isRequired,/** 开始位置 */
        endLocation:Proptypes.number.isRequired,/** 结束位置 */
    }

    static defaultProps={
        strokeCap:'round',
        strokeWidth:10,
        progressColor: '#ebeef5',
        startLocation:0,
        endLocation:100,
    }


    constructor(props) {
        super(props);

    }


    render() {
        const {
            strokeCap,
            strokeWidth,
            progressColor,
            startLocation,
            endLocation,
        }=this.props;

        if(startLocation > endLocation){
            throw new Error(' 错误了==>开始距离大于结束距离了');
        }

        var startX = strokeCap =='butt' ?0:strokeWidth/2;
        var arcRightPath = strokeCap =='butt' ? `L${endLocation} ${strokeWidth}`:`A${strokeWidth/2} ${strokeWidth/2} 0 0 1 ${endLocation} ${strokeWidth}`;
        var arcLeftPath = strokeCap =='butt' ? `L${startX+startLocation} ${0}`:`A${strokeWidth/2} ${strokeWidth/2} 0 0 1 ${startX+startLocation} ${0}`;

        var reslut = `M${startX+startLocation} ${0} L${endLocation} ${0} ` +arcRightPath + `L${startX+startLocation} ${strokeWidth}` +arcLeftPath
        var path = new Path().push(reslut);

        var linearGradient = typeof progressColor=='string'?progressColor: new LinearGradient(progressColor,startX ,strokeWidth/2 ,endLocation,strokeWidth/2);

        return (
            <Shape
                d = {path}
                strokeWidth={0}
                fill={linearGradient}

            />
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});