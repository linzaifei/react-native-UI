import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ViewPropTypes,
} from 'react-native';


import PropTypes from 'prop-types'

export default class ZFImageView extends Component {

    static propTypes={
        image:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        imageStyle:ViewPropTypes.style,
    }

    render() {
        const {
            image,
            imageStyle,
        }=this.props;

        var img = typeof image == 'string'?{uri:image}:image;
        return (
            <Image
                source={img}
                style={{
                    ...styles.imageStyle,
                    ...imageStyle,
                }}
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    imageStyle:{
        width:30,
        height:30,
    }
});