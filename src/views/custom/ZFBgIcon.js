import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    ImageBackground,
    ART,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types'
import ZFText from "./ZFText";

export default class ZFBgIcon extends Component {

    static propTypes = {
        title:PropTypes.string,
        detail:PropTypes.string,
        boxStyle:ViewPropTypes.style,
        icon:PropTypes.element,
        onPress:PropTypes.func,
    }

    static defaultProps = {

    }

    render() {
        const {
            boxStyle,
            title,
            detail,
            icon,
            onPress,
        }=this.props;

        return (
            <TouchableOpacity onPress={()=>{
                onPress&&onPress()
            }} >
                <ImageBackground source={{uri:'https://image.weilanwl.com/color2.0/cardBg.png'}} style={[{width:'100%',height:90},boxStyle]}>
                    <View style={[styles.container]}>
                        <View style={[cusStyle.layout_row ,styles.header]}>
                            <ZFText content={title} subNub={1} />
                            {icon}
                        </View>
                        <ZFText content={detail} subNub={1} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        );
    }

}

var styles = StyleSheet.create({
    container: {
        // backgroundColor:'red',
        padding:10
    },
    header:{
        justifyContent:'space-between',
        marginBottom:10,
    },


});