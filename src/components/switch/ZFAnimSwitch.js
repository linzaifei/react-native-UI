import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'

import ZFAnimBgView from "./ZFAnimBgView";
const AnimBgView = Animated.createAnimatedComponent(ZFAnimBgView)

const {
    Surface,
}=ART;

export default class ZFAnimSwitch extends Component {

    static propTypes = {
        boxStyle:ViewPropTypes.style,
        isOn: PropTypes.bool.isRequired,/** 开关状态 */
        size:PropTypes.oneOf(['small','medium','large']),/** 开关size */
        onColors:PropTypes.array,/** 开关开启颜色 */
        offColors:PropTypes.array,/** 开关关闭颜色 */
        onToggle: PropTypes.func,/** 事件 */
        leftView:PropTypes.element,/** 左视图 */
        rightView:PropTypes.element,/** 左视图 */
    }


    static defaultProps = {
        isOn : false,
        size: 'medium',
        onColors:['#984461','#377ead'],
        offColors:['#e03997','#fbbd08']
    }

    constructor(props) {
        super(props);
        this.state={
            open:new Animated.Value(0),
            isOn:this.props.isOn
        }
    }

    componentDidMount(){
        this.startAnimation()
    }


    componentWillReceiveProps(nextProps){
        console.log('=======',nextProps)
        if(nextProps.isOn != this.props.isOn){
            this.state.isOn = nextProps.isOn;
            this.startAnimation()
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        return false
    }


    startAnimation(){
        var self = this;
        const {
            open,
            isOn,
        }=self.state;
        Animated.timing(open,{
            toValue:isOn?1:0,
        }).start(()=>{
            self.state.isOn =! self.state.isOn;
        })
    }


    getSize(){
        const{
            size,
        }=this.props;

        var packageData = {};

        switch (size){
            case 'small':
                packageData={
                    width:50,
                    height:24,
                }
                break;
            case 'medium':
                packageData={
                    width:55,
                    height:26,
                }
                break;
            case 'large':
                packageData={
                    width:70,
                    height:35,
                }
                break;
        }
        return packageData;
    }



    render() {
        console.log('====刷新界面-switch')
        const {
            onColors,
            offColors,
            onToggle,
            leftView,
            rightView,
            boxStyle
        }=this.props;
        const {
            open,
        }=this.state;

        var Size = this.getSize();
        const {width,height}= Size;
        var imgSize = height/1.5;

        return (
            <TouchableWithoutFeedback onPress={()=>{
                onToggle &&onToggle(this.state.isOn)
                this.startAnimation()
            }}>
                <View style={{
                    borderRadius:5,
                    ...boxStyle,
                    overflow:'hidden',
                    width:width,

                }}>
                    <Surface width={width} height={height} style={{backgroundColor:'yellow'}}>
                        <AnimBgView Size={Size} {...this.props} onColor={open.interpolate({
                            inputRange:[0,1],
                            outputRange:[onColors[0],offColors[0]]
                        })} offColor={this.state.open.interpolate({
                            inputRange:[0,1],
                            outputRange:[onColors[1],offColors[1]]
                        })}
                        />
                    </Surface>
                    <Animated.View style={{
                        width:imgSize,
                        height:imgSize,
                        position:'absolute',
                        alignItems:'center',
                        justifyContent:'center',
                        top:(height - imgSize)/2,
                        transform:[
                            {
                                scaleX:open.interpolate({
                                    inputRange:[0,1],
                                    outputRange:[1,0.1],
                                })
                            },{
                                scaleY:open.interpolate({
                                    inputRange:[0,1],
                                    outputRange:[1,0.1],
                                })
                            }
                        ],
                        left:open.interpolate({
                            inputRange:[0,1],
                            outputRange:[5,width/2-10],
                        }),
                        opacity:open.interpolate({
                            inputRange:[0,1],
                            outputRange:[1,0],
                        })
                    }} >
                        {
                            leftView?leftView:<Image  source={require('./dui.png')} style={{
                                width:imgSize,
                                height:imgSize,
                            }} />
                        }

                    </Animated.View>
                    <Animated.View  style={{
                        width:imgSize,
                        height:imgSize,
                        alignItems:'center',
                        justifyContent:'center',
                        position:'absolute',
                        top:(height - imgSize)/2,
                        right:open.interpolate({
                            inputRange:[0,1],
                            outputRange:[width/2-10,5],
                        }),
                        opacity:open.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,1],
                        }),
                        transform:[
                            {
                                scaleX:open.interpolate({
                                    inputRange:[0,1],
                                    outputRange:[0.1,1],
                                })
                            },{
                                scaleY:open.interpolate({
                                    inputRange:[0,1],
                                    outputRange:[0.1,1],
                                })
                            }
                        ],
                    }} >
                        {
                            rightView?rightView:<Image  source={require('./cuo.png')} style={{
                                width:imgSize,
                                height:imgSize,
                            }} />
                        }
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});