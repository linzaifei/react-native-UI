import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'

export default class ZFText extends Component {

    static propTypes = {
        content:PropTypes.string,
        subNub:PropTypes.number,
        textStyle:ViewPropTypes.style,
        subStyle:ViewPropTypes.style,
    }

    static defaultProps = {
        subNub:0,


    }



    render() {
        const {
            content,
            subNub,
            textStyle,
            subStyle,
        }=this.props;

        const textHeader = content.substring(0,subNub);
        const textfooter = content.substring(subNub);

        // console.log('========_'+textHeader)

        return (
            <Text style={[styles.textStyle,textStyle]}>
                {textHeader+' '}
                <Text style={[styles.subStyle,subStyle]}>
                    {textfooter}
                </Text>
            </Text>
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    textStyle:{
        color:'#fff',
        fontSize:20,
    },
    subStyle:{
        fontSize:17,
    }
});