import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'


export default class ZFInputView extends Component {

    static propTypes={
        inputStyle:ViewPropTypes.style,/** input样式 */
        multiline:PropTypes.string,/** 多行显示 默认false */
        numberOfLines:PropTypes.string,/** 限制行数 */
        placeholder:PropTypes.string,/** 占位符 */
        placeholderTextColor:PropTypes.string,/** 占位符颜色 */
        maxLength:PropTypes.number,/** 输入字符最大个数 */
        returnKeyType:PropTypes.oneOf(['done','go','next','search','send']),/** 键盘样式 */
        keyboardType:PropTypes.oneOf(['default','number-pad','decimal-pad','numeric','email-address','phone-pad',]),/** 键盘类型 */
        secureTextEntry:PropTypes.bool,/** 是否显示 默认 false */
        defaultValue:PropTypes.string,/** 默认value */
        editable:PropTypes.bool,/** 是否可以编辑 默认可以*/
        onFocus:PropTypes.func,/** 回调输入文字*/
        onBlur:PropTypes.func,/** 回调输入文字*/
        onChangeText:PropTypes.func,/** 回调输入文字*/
    }

    static defaultProps = {
        animation:true,
        secureTextEntry:false,
        showIcon:false,
        placeholder:'请输入'
    }



    render() {
        const {
            inputStyle,
        }=this.props;
        return (
            <TextInput
                {...this.props}
                underlineColorAndroid={'transparent'}
                style={{
                    ...styles.container,
                    ...inputStyle,
                    padding: 0,
                }}
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {
        fontSize:15,
        color:'#333'
    }
});