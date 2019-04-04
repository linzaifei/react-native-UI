import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'
import ZFInputView from "../../components/inputView/ZFInputView";
import ZFButtom from "../../components/Buttom/ZFButton";
import IconFont from '../../Icon/IconFont'
export default class ZFSendBar extends Component {

    static propTypes = {
        sendStyle:ViewPropTypes.style,
        leftView:PropTypes.element,
        rightView:PropTypes.element,
        ...ZFInputView.propTypes,
        onSendPress:PropTypes.func,/** 发送 */
        onFacePress:PropTypes.func,/** 表情 */
    }

    static defaultProps = {


    }

    render() {
        const {
            sendStyle,
            onSendPress,
            onFacePress,
            leftView,
        }=this.props;
        return (
            <View style={{
                flex:1,

                ...sendStyle,
                ...styles.container,
            }}>
                {
                    leftView?leftView:
                        <ZFButtom
                            btnStyle={{
                                backgroundColor:'transparent'
                            }}
                            onPress={onFacePress}
                        >
                            <IconFont
                                name="ic_yuyin"
                                color="#666"
                                size={22}
                            />
                        </ZFButtom>

                }
                <ZFInputView
                    {...this.props}
                    placeholder=""
                    inputStyle={{
                        flex:1,
                        borderBottomWidth:1,
                        borderColor:'#eee',
                        paddingBottom:5,
                        marginTop:3
                    }}
                />
                <ZFButtom
                    btnStyle={{
                        backgroundColor:'transparent'
                    }}
                    onPress={onFacePress}
                >
                    <IconFont
                        name="ic_xiaolian"
                        color="#666"
                        size={26}
                    />
                </ZFButtom>
                <ZFButtom
                    title="发送"
                    onPress={onSendPress}
                    btnStyle={{
                        backgroundColor:'#1cbbb4',
                    }}
                    textStyle={{
                        color:'#fff',
                        fontSize:14,
                    }}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingLeft:5,
        paddingRight:5,
    }
});