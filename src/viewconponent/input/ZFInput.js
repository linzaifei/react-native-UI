import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    TouchableWithoutFeedback,
    TextInput,
    Animated,
    Easing,
    Image,
} from 'react-native';

import PropTypes from 'prop-types'
import ZFInputView from "../../components/inputView/ZFInputView";

export default class ZFInput extends Component {

    static propTypes = {
        boxStyle:ViewPropTypes.style,/** 外边框样式 */
        imageStyle:ViewPropTypes.style,/** 图片样式 */
        inputStyle:ViewPropTypes.style,/** input样式 */
        image:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
        imageH:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        ...ZFInputView.propTypes,

        // placeholder:PropTypes.string,/** 占位符 */
        // placeholderTextColor:PropTypes.string,/** 占位符颜色 */
        // maxLength:PropTypes.number,/** 输入字符最大个数 */
        // returnKeyType:PropTypes.oneOf(['done','go','next','search','send']),/** 键盘样式 */
        // keyboardType:PropTypes.oneOf(['default','number-pad','decimal-pad','numeric','email-address','phone-pad',]),/** 键盘类型 */
        // secureTextEntry:PropTypes.bool,/** 是否显示 默认 false */
        // defaultValue:PropTypes.string,/** 默认value */
        // editable:PropTypes.bool,/** 是否可以编辑 默认可以*/
        // onChangeText:PropTypes.func,/** 回调输入文字*/
        animation:PropTypes.bool,/** 是否需要动画 默认true */
        rightView:PropTypes.element,/** 右试图 */
        showIcon:PropTypes.bool,/** 展示icon */
        lable:PropTypes.element,
        lableSel:PropTypes.element,
    }

    static defaultProps = {

        animation:true,
        secureTextEntry:false,
        showIcon:false,
    }



    constructor(props) {
        super(props);
        this.state={
            leftX: new Animated.Value(0),
            lineWidth:0,
        }
    }

    componentDidMount(){

    }

    startAnimation(){
        const {
            leftX,
        }=this.state;
        const {
            animation
        }=this.props;
        if (!animation){
            return;
        }
        Animated.timing(leftX,{
            toValue:1,
            duration:400,
            easing:Easing.linear(),
        }).start()
    }
    stopAnimation(){
        const {
            leftX,
        }=this.state;
        const {
            animation
        }=this.props;

        if (!animation){
            return;
        }
        Animated.timing(leftX,{
            toValue:0,
            duration:400,
            easing:Easing.linear(),
        }).start()
    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('=========nextState'+JSON.stringify(nextState))
        if(nextProps.placeholder !=this.props.placeholder
            ||nextProps.defaultValue !=this.props.defaultValue
            ||nextProps.image !=this.props.image
            ||nextProps.imageH !=this.props.imageH
            ||nextProps.maxLength !=this.props.maxLength
        ){

            return true
        }
        return false;
    }

    leftView() {
        var self = this;
        const {
            imageStyle,
            showIcon,
            lable,
            lableSel,
            image,
            imageH,
        }=self.props;
        const {
            leftX,
        }=self.state;
        const imgUrl = typeof image == 'string' ? {uri:image}:image;
        const imgHUrl = typeof imageH == 'string' ? {uri:imageH}:imageH;
        return (
            <View style={{
                ...styles.container
            }}>
                <Animated.View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        opacity:leftX.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,1],
                        }),
                        transform:[{
                            translateX: leftX.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-30, 0]
                            })
                        }]
                    }}
                >
                    {
                        showIcon ?lableSel:
                            <Image source={imgHUrl} resizeMode="contain" style={{
                                ...styles.imageStyle,
                                ...imageStyle,
                            }}/>
                    }
                </Animated.View>

                <Animated.View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        opacity:leftX.interpolate({
                            inputRange:[0,1],
                            outputRange:[1,0],
                        }),
                        transform:[{
                            translateX: leftX.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-30, 0]
                            })
                        }]
                    }}
                >
                    {
                        showIcon?lable :
                            <Image source={imgUrl} resizeMode="contain" style={{
                                ...styles.imageStyle,
                                ...imageStyle,
                            }}/>
                    }
                </Animated.View>
            </View>
        )
    }


    render() {
        console.log('=========刷新界面')
        var self = this;
        const {
            boxStyle,
            inputStyle,
            image,
            rightView,
            onChangeText,
            showIcon,
        }=self.props;

        if(!image&& !showIcon){
            console.warn('图片不能为空')
        }

        return (
            <View style={{
                ...styles.boxStyle,
                ...boxStyle,
                ...styles.container,
            }}>
                {this.leftView()}

                <ZFInputView
                    inputStyle={{
                        ...inputStyle,
                        ...styles.input,
                    }}
                    {...this.props}
                    onFocus={()=>{
                        self.startAnimation()
                    }}
                    onBlur={()=>{
                        self.stopAnimation()
                    }}
                    onChangeText={(event)=>{
                        onChangeText && onChangeText(event)
                    }}
                />
                {rightView}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    boxStyle:{
        backgroundColor:'#fff',
        padding:10,
    },
    lineStyle:{
        backgroundColor:'#BA4B51',
        height:1,
    },
    imageStyle:{
      width:30,
        height:30,
    },
    input:{
        flex:1,
        padding:4,
        left:-30,
    },
    line:{

    }
});