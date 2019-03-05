import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';
import ZFTag from "./ZFTag";
import PropTypes from 'prop-types'
import IconFont from  '../../Icon/IconFont'

export default class ZFIconTag extends Component {

    static propTypes = {
        boxStyle:ViewPropTypes.style,
        textStyle:ViewPropTypes.style,
        direction: PropTypes.oneOf(['left','right','top','bottom']),/** 开关状态 */
        space:PropTypes.number,
        text:PropTypes.string,
        iconName:PropTypes.string.isRequired,
        iconSize:PropTypes.number.isRequired,
        iconColor:PropTypes.string.isRequired,
    }

    static defaultProps = {
        direction:'right',
        space:5,
        iconSize:25,
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('=========nextState'+JSON.stringify(nextState))
        return false;
    }
    render() {
        const {
            iconName,
            iconSize,
            iconColor,
        }=this.props;
        return (
            <ZFTag {...this.props} rightBottomView={
                <IconFont
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                />} />
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});