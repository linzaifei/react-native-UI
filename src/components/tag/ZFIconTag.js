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
        ...ZFTag.propTypes,
        name:PropTypes.string,
        size:PropTypes.number,
        color:PropTypes.string,
        rightStyle:ViewPropTypes.style,
    }

    static defaultProps = {
        direction:'right',
        space:5,
        size:25,
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('=========nextState'+JSON.stringify(nextState))
        return false;
    }
    render() {
        const {
            name,
            size,
            color,
            rightStyle,
        }=this.props;
        return (
            <ZFTag {...this.props}
                   rightBottomView={
                       <View style={{
                           ...rightStyle
                       }}>
                           <IconFont
                               name={name}
                               size={size}
                               color={color}
                           />
                       </View>
                   }
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});