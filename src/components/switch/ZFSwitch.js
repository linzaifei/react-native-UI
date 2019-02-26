import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';

import PropTypes from 'prop-types'

export default class ZFSwitch extends Component {

    static propTypes = {
        isOn: PropTypes.bool.isRequired,/** 开关状态 */
        onColor: PropTypes.string.isRequired,/** 开关开启颜色 */
        offColor: PropTypes.string.isRequired,/** 开关关闭颜色 */
        size:PropTypes.oneOf(['small','medium','large']),/** 开关size */
        type:PropTypes.oneOf(['circle','butt',]),/** 开关样式 */
        tagEelement:PropTypes.element,/** 自定义中间图标 */
        onToggle: PropTypes.func,/** 事件 */
    }

    static defaultProps = {
        isOn : false,
        onColor: '#634fc9',
        offColor: '#ecf0f1',
        size: 'medium',
        type:'circle',
    }

    constructor(props){
        super(props)
        this.state={
            transX: new Animated.Value(0),
            isOn:this.props.isOn,
        }
    }

    componentDidMount(){
        this.startAnimation()
    }

    shouldComponentUpdate(nextProps,nextState) {
        // console.log('====nextState'+nextState.isOn)
        // console.log('====state'+this.state.isOn)
        if (nextState.isOn != this.state.isOn) {
            // console.log('==== com'+this.state.isOn)
            return false;
        }
        return true;
    }



    startAnimation(){
        var self = this;
        const {
            transX,
            isOn
        }=self.state;
        Animated.timing(transX,{
            toValue:isOn?1:0,
        }).start(()=>{
            self.setState({
                isOn:!isOn,
            })
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
                    bgWidth:50,
                    bgHeight:25,
                    tagSize:20,
                    outputRange:[5,25],
                }
                break;
            case 'medium':
                packageData={
                    bgWidth:55,
                    bgHeight:30,
                    tagSize:25,
                    outputRange:[5,25],
                }
                break;
            case 'large':
                packageData={
                    bgWidth:65,
                    bgHeight:35,
                    tagSize:30,
                    outputRange:[5,30],
                }
                break;
        }
        return packageData;
    }




    render() {
        const{
            offColor,
            onColor,
            onToggle,
            tagEelement,
            type,
        }=this.props;
        const {
            transX,
        }=this.state;

        // console.log('=====刷新界面了')

        var packageData=this.getSize();



        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    onToggle&& onToggle(this.state.isOn)
                    this.startAnimation();
                }}
            >
                <Animated.View style={[styles.container,{
                    width:packageData.bgWidth,
                    height:packageData.bgHeight,
                    backgroundColor:transX.interpolate({
                        inputRange:[0,1],
                        outputRange:[offColor,onColor]
                    }),
                    borderRadius:type=='circle'?packageData.bgHeight/2.0:5,
                }]}>
                    <Animated.View style={[{
                        width:packageData.tagSize,
                        height:packageData.tagSize,
                        borderRadius: type=='circle'?packageData.tagSize/2:5,
                        backgroundColor:'#fff',
                        alignItems:'center',
                        justifyContent:'center',
                        transform:[
                            {
                                translateX:transX.interpolate({
                                    inputRange:[0,1],
                                    outputRange:packageData.outputRange,
                                })
                            },{
                                rotate:type=='circle'?transX.interpolate({
                                    inputRange:[0,1],
                                    outputRange:['0deg','360deg'],
                                }):'0deg'
                            }
                        ]
                    },styles.tag]} >
                        {tagEelement}
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },


});