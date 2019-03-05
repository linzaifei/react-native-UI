import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Animated,
} from 'react-native';

import PropTypes from 'prop-types'

export default class ZFsquare extends Component {

    static propTypes = {
        list:PropTypes.array,/** 数组 */
        count:PropTypes.number,/** 水平显示cell 个数 默认4个 */
        margin:PropTypes.number,/** 边框边距*/
        space:PropTypes.number,/** 边框间距离*/
        max:PropTypes.number,/** 显示最大个数*/
        backgroundColor:PropTypes.string,/** 背景*/
        canAdd:PropTypes.bool,/** 能不能添加 默认false */
        showDel:PropTypes.bool,/** 展示删除按钮 默认false */
        borderRadius:PropTypes.number,/** 圆角*/
        onClickItem:PropTypes.func,/** 点击item */
        onDelItem:PropTypes.func,/** 删除Item */
        onAdd:PropTypes.func,/** 添加图片 */
        tabs:PropTypes.func,/** 自定义显示cell */

    }

    static defaultProps = {
        count:4,
        space:5,
        margin:5,
        max:9,
        borderRadius:5,
        backgroundColor:'#f2f2f2',
        canAdd:false,
        showDel:false,

    }

    constructor(props) {
        super(props);
        this.state={
            width:100,
            opacityX:new Animated.Value(0)
        }
    }

    componentDidMount(){
        this.startAnimation()

    }

    shouldComponentUpdate(nextProps,nextState){

        console.log('nextStatewidth===='+nextProps.list.length)
        console.log('width===='+this.props.list.length)

        if(nextProps.list.length == this.props.list.length){
            return true;
        }

        // console.log('nextStatewidth===='+nextState.width)
        // console.log('width===='+this.state.width)
        if (nextState.width != this.state.width){
            return true;
        }
        return true
    }

    startAnimation(){
        Animated.timing(this.state.opacityX,{
            toValue:1,
        }).start()
    }



    getItems(width){
        const {
            count,
            space,
            list,
            tabs,
            borderRadius,
            onClickItem,
        }=this.props;

       var boIndex = parseInt((list.length /count)) * count;
        var subs = []
        list.map((item,index)=>{
            subs.push(
                <TouchableWithoutFeedback
                    key={index}
                    onPress={()=>{
                        onClickItem&&onClickItem(index)
                    }}
                >
                    <Animated.View
                        style={{
                            ...styles.item,
                            width:width,
                            borderRadius,
                            opacity:this.state.opacityX.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,1],
                            }),
                            marginBottom:index < boIndex? space :0,
                            marginLeft: index == (parseInt(index / count) * count) ? 0 : space
                        }}
                    >
                        {
                            tabs? tabs(item,index,width):
                                <Image source={{uri:item}} style={{width:width,height:width}} />
                        }
                    </Animated.View>
                </TouchableWithoutFeedback>
            )

        })
        return subs;
    }

    getAdd(width){
        const {
            canAdd,
            list,
            max,
            tabs,
            space,
            onAdd,
            count,
            borderRadius,
        }=this.props;
        var index =  list.length % count

        if(canAdd && list.length < max && !tabs){
            return(
                <TouchableOpacity onPress={()=>{
                    onAdd&&onAdd()
                }} style={{
                    marginLeft:index == 0 ?0:space,
                    width:width,
                    height:width,
                    borderRadius,
                    backgroundColor:'#fff',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Image source={require('./ic_camare.png')} style={{width:40,height:40}} />
                </TouchableOpacity>
            )
        }
    }

    render() {
        var self = this;
        const {
            width,
        }=self.state;
        const {
            margin,
            count,
            space,
            backgroundColor,
        }=self.props;
        var itemWidth = (width - 2 * margin - (count -1) * space) / count;
        return (
            <View onLayout={(e)=>{
                this.setState({
                    width:e.nativeEvent.layout.width,
                })
            }} style={{
                ...styles.container,
                padding:margin,
                backgroundColor,
            }}>
                {this.getItems(itemWidth)}
                {this.getAdd(itemWidth)}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
    },
    item:{
        position:'relative',

        overflow:'hidden'
    },
});