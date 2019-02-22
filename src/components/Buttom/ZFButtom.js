import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
    ViewPropTypes,
} from 'react-native';

import Proptypes from 'prop-types'

export default class ZFButtom extends Component {

    static propTypes={
        btnStyle:ViewPropTypes.style,
        textStyle:ViewPropTypes.style,
        title:Proptypes.string,/** 标题 */
        disabled:Proptypes.bool,/** 是否可以点击 默认false 可以点击 */
        hollow:Proptypes.bool,/** 是否为镂空 默认false */
        onPress:Proptypes.func,/** 点击事件 */
        onLongPress:Proptypes.func,/** 长按事件 */
        children:Proptypes.node,/**  */
    }

    static defaultProps={
        disabled:false,
    }

    constructor(props) {
        super(props);
        this.state={
            transform:new Animated.ValueXY(0,0),
        }
    }

    componentDidMount(){

    }

    startAnimation(){

        const {
            transform,
        }=this.state;
        const {
            disabled
        }=this.props

        if (disabled)return;

        Animated.timing(transform,{
            toValue:(1,1),
            duration:100
        }).start()
    }

    stopAnimation(){
        const {
            transform,
        }=this.state;
        const {
            disabled
        }=this.props
        if (disabled)return;
        Animated.timing(transform,{
            toValue:(0,0),
            duration:100
        }).start()
    }

    render() {
        var self = this;
        const {
            transform,
        }=self.state;
        const {
            btnStyle,
            onPress,
            onLongPress,
            children,
            textStyle,
            title,
            hollow,
            disabled,
        }=self.props;

        var btnS = hollow ? {
            backgroundColor:'transparent',
            borderWidth:1,
            borderColor:textStyle.color,
        }:{}

        return (
            <TouchableWithoutFeedback
                onPressIn={()=>{
                    self.startAnimation();
                    // console.log('点击开始')
                }}
                onPressOut={()=>{
                    self.stopAnimation()
                    // console.log('点击结束')
                }}
                onLongPress={()=>{
                    // console.log('长按')
                    !disabled&&onLongPress&&onLongPress()
                }}
                onPress={()=>{
                    // console.log('点击')
                    !disabled&&onPress&&onPress()
                }}
            >
                <Animated.View
                    style={{
                        ...styles.container,
                        ...btnStyle,
                        ...btnS,
                        transform:[
                            {
                                translateX:transform.x,
                            },{
                                translateY:transform.y,
                            },
                        ]
                    }}
                >
                    {
                        children ?children:<Text style={{
                            ...styles.textStyle,
                            ...textStyle,
                        }}>{title}</Text>
                    }
                </Animated.View>
            </TouchableWithoutFeedback>

        );
    }

}

var styles = StyleSheet.create({
    container: {
        backgroundColor:'#F0F0F0',
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center',
    },
    textStyle:{
      color:'#333',
      fontSize:15,

    }
});