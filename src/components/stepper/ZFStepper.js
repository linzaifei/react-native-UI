import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    PanResponder,
} from 'react-native';
import Proptypes from 'prop-types'


export default class ZFStepper extends Component {


    static propTypes={
        size:Proptypes.oneOf(['small','medium','large']),/** 开关size */
        type:Proptypes.oneOf(['normal','pan']),/** 步进器样式 */
        count:Proptypes.number,/** 当前显示个数 */
        textColor:Proptypes.string,/** 中间数字颜色 */
        backgroundColor:Proptypes.string,/** 背景色 */
        completed:Proptypes.func,/**  */
    }

    static defaultProps={
        disabled:false,
        size:'large',
        count:0,
        textColor:'#1cbbb4',
        backgroundColor:'#1cbbb4',
        type:'normal'
    }

    componentWillReceiveProps(nextProps){
        console.log('========nextProps'+nextProps)
    }

    shouldComponentUpdate(nextProps,nextState) {
        // console.log('====nextState'+nextState.isOn)
        // console.log('====state'+this.state.isOn)
        if (nextState.count == this.state.count) {
            // console.log('==== com'+this.state.isOn)
            return false;
        }
        return true;
    }


    constructor(props) {
        super(props);
        this.state={
            transformXY:new Animated.ValueXY(),
            count:this.props.count,
        };
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove: Animated.event(
                [null,{dx:this.state.transformXY.x,dy:this.state.transformXY.y}]
            ),
            onPanResponderRelease:(x,data)=>{
                const {completed,type}=this.props;
                const { count,}=this.state;

                if(type=='pan'){
                    this.setState({
                        count:(data.dx >= 20)? count+1:(data.dx <=-20 && count!=0)?count-1:count,
                    },()=>{
                        count!=0 &&completed && completed(this.state.count);
                    })
                }
                Animated.spring(this.state.transformXY,{
                    toValue:{x:0,y:0}
                }).start()
            },
            onPanResponderTerminate:()=>{
                Animated.spring(this.state.transformXY,{
                    toValue:{x:0,y:0}
                }).start()
            },
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
                    width:70,
                    height:25,
                }
                break;
            case 'medium':
                packageData={
                    width:75,
                    height:30,
                }
                break;
            case 'large':
                packageData={
                    width:85,
                    height:35,
                }
                break;
        }
        return packageData;
    }

    render() {
        // console.log('========刷新了')
        const {
            transformXY,
            count,
        }=this.state;
        const {
            textColor,
            backgroundColor,
            normal,
            type,
            completed,
        }=this.props;

        const {width,height}=this.getSize();

        return (
            <View style={{
                ...styles.container,
                width:width,
                height:height,
                borderRadius: type=='normal'?8:height/2.0,
                backgroundColor: type=='normal' ?'#f1f1f1' :backgroundColor,
                borderWidth: type=='normal' ?1:0,
                borderColor:backgroundColor,
            }}>
                <Text onPress={()=>{
                    if (type =='normal'){
                        this.setState({
                            count:count==0?0: count-1,
                        },()=>{
                            count!=0 && completed && completed(this.state.count);
                        })
                    }
                }} style={{
                    ...styles.textStyle,
                    marginLeft:5,
                    color:type=='normal'? backgroundColor : count==0?'rgba(255,255,255,0.4)':'#fff'
                }}>-</Text>

                <Animated.View style={{
                    width:height,
                    height:height,
                    backgroundColor:type=='normal' ?'transparent':'#fff',
                    borderRadius:height/2.0,
                    zIndex:100,
                    alignItems:'center',
                    justifyContent:'center',
                    transform : type=='normal'?[]:[
                        {
                            translateX:transformXY.x,
                        }
                    ]
                }} {...this._panResponder.panHandlers} >
                    <Animated.Text style={{
                        color:textColor,
                        fontSize:18,
                    }}>{this.state.count}</Animated.Text>
                </Animated.View>

                <Text onPress={()=>{
                   if (type =='normal'){
                       this.setState({
                           count:count+1,
                       },()=>{
                           count!=0 &&completed && completed(this.state.count);
                       })
                   }
                }} style={{
                    ...styles.textStyle,
                    marginRight:5,
                    color:type=='normal'? backgroundColor :'#fff'
                }}>+</Text>
            </View>
        );

    }

}

var styles = StyleSheet.create({
    container: {
        overflow:'hidden',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textStyle:{
        fontSize:25,
        color:'#fff'

    }
});