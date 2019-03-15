import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'

export default class ZFTimeLine extends Component {

    static propTypes = {
        rightStyle:ViewPropTypes.style,

        leftTagView:PropTypes.element,/** 时间轴tag */
        leftTagStyle:ViewPropTypes.style,
        leftValue:PropTypes.string,/** tagValue */


        rightTextStyle:ViewPropTypes.style,/** 右边 */
        rightValue:PropTypes.string,/** 右边试图Value */
        rightView:PropTypes.element,
    }


    render() {
        const {
            leftTagView,
            leftValue,
            leftTagStyle,
            rightStyle,
            rightValue,
            rightTextStyle,
            rightView,
        }=this.props;
        return (
            <View style={{
                ...styles.container,
            }}>
                <View style={styles.left}>
                    <View style={{
                        ...styles.line,
                        height:10,
                        marginBottom:1,
                    }}></View>
                    {
                        leftTagView?leftTagView:
                            <Text style={{
                                ...styles.tagStyle,
                                ...leftTagStyle,
                            }}>{leftValue}</Text>
                    }
                    <View style={{
                        ...styles.line,
                        flex:1,
                        minHeight:10,
                        marginTop:2,
                    }}></View>
                </View>

                <View style={{
                    borderRadius:3,
                    backgroundColor:'#1cbbb4',
                    ...rightStyle,
                    ...styles.right,
                }}>
                    {
                        rightView?rightView:
                            <Text style={{
                                fontSize:15,
                                padding:8,
                                color:'#fff',
                                ...rightTextStyle,
                            }}>{rightValue}</Text>
                    }
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    left:{
        width:60,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    right:{
        flex:1,
        marginBottom:15,
        marginRight:15,
        marginTop:5,
    },
    line:{
        width:1,
        backgroundColor:'#f1f1f1'
    },
    tagStyle:{
        fontSize:11,
        color:'#666666',
    }
});