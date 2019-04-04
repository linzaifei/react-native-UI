import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    PanResponder,
    TouchableOpacity,
    ViewPropTypes,
} from 'react-native';

import Proptypes from 'prop-types'

export default class ZFSwipeRow extends Component {

    static propTypes={
        children:Proptypes.node,/** 子试图 */
        itemWidth:Proptypes.number,/** 删除或是其他按钮宽度 默认 100 */
        list:Proptypes.array.isRequired,/** 有多少个item */
        subComponent:Proptypes.func,/** 获取自定义样式 */
        onClickItem:Proptypes.func,/** 每一个子菜单点击 */
        disabled:Proptypes.bool,/** 是否禁止 默认false */
        isOpen:Proptypes.bool,/** 是否打开 默认false*/
        onStateChange:Proptypes.func,/** 当前滑动的状态 true 表示开启*/
    }
    static defaultProps={
        itemWidth:100,
        disabled:false,
    }


    componentWillReceiveProps(nextProps){
        console.log('========='+nextProps.isOpen)
        if(this.props.isOpen != nextProps.isOpen){
            if(nextProps.isOpen){
                this.stopSwiper()
            }else {
                this.startSwiper()
            }
        }
    }
    componentDidMount(){
        if(this.props.isOpen){
            this.noteX=null;
            this.startSwiper()
        }
    }

    shouldComponentUpdate(nextProps,nextState){

        return false;
    }

    constructor(props) {
        super(props);
        this.noteX = 0;/** 记录偏移量 */
        this.isOpen = false;
        this.state={
            swiperX:new Animated.Value(0),
            subW:(this.props.list.length * this.props.itemWidth)
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>false,
            onMoveShouldSetPanResponder:(event,gestureState)=>{
                /** 当垂直滑动的距离<10 水平滑动的距离>10的时候才让捕获事件 */
                console.log('_handleMoveShouldSetPanResponderCapture'+gestureState.dx);
                return gestureState.dy < 10 && Math.abs(gestureState.dx) > 10;
            },
            onPanResponderMove:this._onPanResponderMove.bind(this),
            onPanResponderRelease: (evt, gestureState) => {
                /** 用户放开了所有的触摸点，且此时视图已经成为了响应者。 一般来说这意味着一个手势操作已经成功完成。*/
                this.panResponderEnd(gestureState.dx)
                this.noteX=null;
            },
            onPanResponderTerminate: (evt, gestureState) => {
                /** 另一个组件已经成为了新的响应者，所以当前手势将被取消。 */
                this.noteX=null;
            },
        })
    }

    _onPanResponderMove(event: Object, gestureState: Object):void{
        // console.log('_onPanResponderMove'+gestureState.dx)
        // console.log('_onPanResponderMove'+this.state.swiperX._value)
        if(!this.props.disabled){
            if (this.noteX === null){
                this.noteX = this.state.swiperX._value;
            }
            /** 向右滑动值小于0 最大值为最右边 0 */
            let scollX = Math.min(this.noteX + gestureState.dx, 0)
            this.state.swiperX.setValue(
                scollX,
            );
        }
    }

    panResponderEnd(dx){

        if(this.props.disabled){
            return;
        }

        if (this.isOpen){
            if(dx<0){
                this.startSwiper()
            }else {
                this.stopSwiper()
            }
        }else {
            if(dx<-this.state.subW){
                this.startSwiper()
            }else {
                this.stopSwiper()
            }
        }
    }

    stopSwiper(){
        this.startAnimation(0)
        this.isOpen=false;
    }
    startSwiper(){
        this.startAnimation(-this.state.subW)
        this.isOpen=true;
    }

    startAnimation(value,duration=300){
        const {
            swiperX,
        }=this.state;
        const {
            onStateChange
        }=this.props;
        Animated.spring(swiperX,{
            toValue:value,
            duration,
        }).start(()=>{
            onStateChange && onStateChange(this.isOpen);
        })
    }

    getsubs(){
        const {
            list,
            itemWidth,
            onClickItem,
            subComponent,
        }=this.props;
        var arr = []

        list.map((item,index)=>{
            arr.push(
                <TouchableOpacity key={index} onPress={()=>{
                    this.stopSwiper();
                    onClickItem&&onClickItem(index)
                }} style={{
                    backgroundColor:(item&&item.backgroundColor)?item.backgroundColor:'grey',
                    alignItems:'center',
                    justifyContent:'center',
                    width:itemWidth,
                    height:'100%'
                }}>

                    {
                        subComponent?subComponent(item):
                            <Text style={{
                                fontSize:(item&&item.fontSize)?item.fontSize:15,
                                color:(item&&item.color)?item.color:'#fff',
                            }}>{item.value}</Text>
                    }

                </TouchableOpacity>
            )
        })
        return arr;
    }




    render() {
        const {
            itemWidth,
            children,
        }=this.props;

        const {
            swiperX,
        }=this.state;

        return (
            <View style={{
                ...styles.container,
            }}>
                <View style={{
                    ...styles.subTagStyle,
                }}>
                    {this.getsubs()}
                </View>
                <Animated.View style={{
                    ...styles.subStyle,
                    transform:[{
                        translateX:swiperX,
                    }]
                }} {...this._panResponder.panHandlers}>
                    {children}
                </Animated.View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        width: '100%',
        overflow:'hidden',
    },
    subTagStyle:{
        height:'100%',
        position:'absolute',
        right:0,
        top:0,
        flexDirection:'row',
        alignItems:'center',
    },
    subStyle:{
        backgroundColor:'grey',
        flex:1,
        zIndex:100,
        width:'100%'
    }
});