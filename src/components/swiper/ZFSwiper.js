import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    PanResponder,
    Animated,
    ViewPropTypes,
} from 'react-native';
import Proptypes from 'prop-types'
import ZFViewPan from "./ZFViewPan";

export default class ZFSwiper extends Component {

    static propTypes={
        style:ViewPropTypes.style,
        children:Proptypes.node.isRequired,
        defaultIndex: Proptypes.number,/** 获取当前显示的index 默认0 第一涨*/
        isLoop:Proptypes.bool,/** 是否头尾衔接的循环轮播 */
        direction:Proptypes.oneOf(['horizontal','vertical']), /** 滑动方向*/
        intervalTime:Proptypes.number,/** 自动播放间隔 */
        playDirection:Proptypes.oneOfType(['clockwise','counter-clockwise']),/** 自动播放方向 默认顺时针 */
        autoPlay:Proptypes.bool,/** 是否自动播放 默认 true */
        onPress:Proptypes.func,/** 点击当前界面 */
        onChangeEnd:Proptypes.func,/** 滑动结束 */
        onChangeStart:Proptypes.func,/** 滑动开始 */
    }

    static defaultProps={
        defaultIndex:0,
        isLoop:true,
        direction:'horizontal',
    }

    constructor(props) {
        super(props);
        this.state={
            size:0,
        }
    }

    onLyout=(e)=>{
        const {
            direction,
        }=this.props;
        this.setState({
            size:direction=='horizontal'?e.nativeEvent.layout.width:e.nativeEvent.layout.height,
        })
    }


    render() {
        const {
            style,
        }=this.props;
        const {
            size,
        }=this.state;


        if (size==0) {
            return (
                <View style={{
                    ...style,
                    ...styles.swiper,
                }}onLayout={this.onLyout} />
            );
        }
        return (
            <View
                style={{
                    ...style,
                    ...styles.swiper,
                }}
                onLayout={this.onLyout}
            >
               <ZFViewPan
                   {...this.props}
                   size={size}
               />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    swiper: {
        flexDirection:'row',
        alignSelf:'center',
        overflow:'hidden',
    },
    container: {
        backgroundColor:'grey'
    },
    item: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

/**
 *  // 获取 positionAnimated 的动态值
 this.state.positionAnimated.addListener(({ value }) => {
            console.log('position',value)
            this.position = value;
        });
 * */