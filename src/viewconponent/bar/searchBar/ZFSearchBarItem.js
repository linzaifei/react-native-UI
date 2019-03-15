import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types'
import ZFInputView from "../../../components/inputView/ZFInputView";
import ZFImageView from "../../../components/imageView/ZFImageView";


export default class ZFSearchBarItem extends Component {

    static propTypes={
        image:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        ...ZFInputView.propTypes,
        style:ViewPropTypes.style,
    }

    render() {
        const {
            image,
            style,
        }=this.props;

        return (
            <View style={{
                borderRadius:5,
                backgroundColor:'#f1f1f1',
                ...style,
                ...styles.container,
            }}>
                <ZFImageView
                    image={image}
                    imageStyle={{
                        ...styles.imageStyle,
                    }}
                />
                <ZFInputView
                    {...this.props}
                    inputStyle={{
                        flex:1,
                    }}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    imageStyle:{
        width:28,
        height:28,
    }
});