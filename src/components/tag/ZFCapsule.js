import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import PropTypes from 'prop-types'
import ZFTag from "./ZFTag";
import ZFIconTag from "./ZFIconTag";

export default class ZFCapsule extends Component {

    static propTypes = {
        name:PropTypes.string,
        size:PropTypes.number,
        color:PropTypes.string,
        type:PropTypes.oneOf(['text','icon']),
        cap:PropTypes.oneOf(['round','cirle']),
        fontSize:PropTypes.number,
        rightValue:PropTypes.string,
        leftValue:PropTypes.string,
        width:PropTypes.number,
    }

    static defaultProps = {
        type:'text',
        cap:'cirle',
        space:5,
        size:12,
        fontSize:12,
        color:'#1cbbb4',
        width:100,
    }
    render() {
        const {
            type,
            color,
            rightValue,
            fontSize,
            leftValue,
            cap,
            name,
            size,
            width,
        }=this.props;

        if (type =='icon'){
            return (
                <ZFIconTag
                    name={name}
                    size={size}
                    color="#fff"
                    rightStyle={{
                        ...styles.text,

                    }}
                    text={rightValue}
                    textStyle={{
                        color,
                        fontSize,
                        ...styles.text,
                        backgroundColor:'#fff',
                        flex:1,
                        textAlign:'center'
                    }}
                    boxStyle={{
                        borderWidth:1,
                        borderColor:color,
                        padding:0,
                        borderRadius:cap=='cirle'?20:3,
                        overflow:'hidden',
                        backgroundColor:color,

                        width,
                        // flex:1,
                    }}
                />

            )
        }

        return (
            <ZFTag
                direction={'right'}
                text={rightValue}
                textStyle={{
                    color,
                    fontSize,
                    ...styles.text,
                    backgroundColor:'#fff',
                    flex:1,
                    textAlign:'center'
                }}
                rightBottomView={
                    <Text style={{
                        fontSize:size,
                        ...styles.text,
                        textAlign:'center',
                        color:'#fff',
                    }}>
                        {leftValue}
                    </Text>
                }
                boxStyle={{
                    borderWidth:1,
                    borderColor:color,
                    padding:0,
                    borderRadius:cap=='cirle'?20:3,
                    overflow:'hidden',
                    backgroundColor:color,
                    // flex:1,
                    width,
                }}
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    text:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:8,
        paddingRight:8,
        margin:0
    }
});