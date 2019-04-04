import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'
import ZFTag from "../../components/tag/ZFTag";
import ZFInputView from "../../components/inputView/ZFInputView";

export default class ZFSelectItem extends Component {

    static propTypes = {
        ...ZFTag.propTypes,
        itemStyle:ViewPropTypes.style,
        leftView:PropTypes.element,/** 左视图 */
        centerView:PropTypes.element,/** 中间试图 */
        placeholder:PropTypes.string,/** 占位符 */
        placeholderTextColor:PropTypes.string,/** 占位符颜色 */
        maxLength:PropTypes.number,/** 输入字符最大个数 */
        returnKeyType:PropTypes.oneOf(['done','go','next','search','send']),/** 键盘样式 */
        keyboardType:PropTypes.oneOf(['default','number-pad','decimal-pad','numeric','email-address','phone-pad',]),/** 键盘类型 */
        secureTextEntry:PropTypes.bool,/** 是否显示 默认 false */
        animation:PropTypes.bool,/** 是否需要动画 默认true */
        defaultValue:PropTypes.string,/** 默认value */
        fontSize:PropTypes.number,/** 字体大小 */
        canArrow:PropTypes.bool,/** 有没有箭头 */
        canTag:PropTypes.bool,/** 有没有* */
        editable:PropTypes.bool,/** 是否可以编辑 默认可以 false*/
        numberOfLines:PropTypes.number,/** 不可编辑下最多显示几行 默认3  */
        onChangeText:PropTypes.func,/** 回调输入文字*/
        onPress:PropTypes.func,/** 点击 */
    }

    static defaultProps = {
        direction:'right',
        canArrow:true,
        keyboard:'default',
        fontSize:15,
        numberOfLines:3,
        canTag:false,
    }




    constructor(props) {
        super(props);

    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('=========nextState'+JSON.stringify(nextState))
        if(nextProps.defaultValue !=this.props.defaultValue){
            return true
        }
        return false;
    }

    cusLeftView(){
        const {
            canTag
        }=this.props;
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                <ZFTag {...this.props} />
                {
                    canTag?<Text style={{
                        color:'red',
                        marginLeft:2,
                    }}>*</Text>:null
                }
            </View>
        )
    }

    centerView(){
        const {
            placeholder,
            placeholderTextColor,
            secureTextEntry,
            defaultValue,
            editable,
            maxLength,
            keyboardType,
            onChangeText,
            fontSize,
            numberOfLines,
        }=this.props;

        if (editable){
            return (
                <ZFInputView
                    inputStyle={{
                        flex:1,
                        textAlign:'right',
                        fontSize,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    defaultValue={defaultValue}
                    editable={editable}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    onChangeText={(event)=>{
                        onChangeText && onChangeText(event)
                    }}
                />

            )
        }else {
            return(
                <Text style={{
                    textAlign:'right',
                    flex:1,
                    fontSize,
                    color:defaultValue ?"#333":'#ddd'
                }} numberOfLines={numberOfLines}>{defaultValue?defaultValue:placeholder}</Text>
            )
        }

    }

    backView(){
        const {
            canArrow,
        }=this.props;
        if (canArrow){
            return (
                <Image source={require('./ic_back.png')} style={{width:18,height:18}} />
            )
        }
    }

    render() {
        console.log('ZFSelectItem========刷新')
        var self = this;
        const {
            itemStyle,
            leftView,
            centerView,
            onPress,
        }=self.props;
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>{
                    onPress &&onPress()
                }}
                style={{
                    padding:5,
                    backgroundColor:'#fff',
                    ...itemStyle,
                    ...styles.container,
                }}>
                {
                    leftView?leftView:self.cusLeftView()
                }
                <View style={{
                    ...styles.container,
                    justifyContent:'flex-end'
                }}>
                    {
                        centerView?centerView:this.centerView()
                    }
                    {this.backView()}
                </View>
            </TouchableOpacity>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        flex:1,
    }
});