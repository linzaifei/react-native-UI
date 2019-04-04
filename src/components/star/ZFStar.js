import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
    Animated,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Easing,
    ViewPropTypes,
} from 'react-native';

import Proptypes from 'prop-types'
import ZFStarView from "./ZFStarView";
import ZFSmileView from "./ZFSmileView";

var AnimStarView = Animated.createAnimatedComponent(ZFStarView)
var AnimSmileView= Animated.createAnimatedComponent(ZFSmileView)

export default class ZFStar extends Component {

    static propTypes={
        style:ViewPropTypes.style,
        type:Proptypes.oneOf(['star','smile']),/** 评分样式 */
        scale:Proptypes.number,/** 尺寸大小 默认为1 */
        activeColor:Proptypes.string,/** 星星试图高亮颜色 */
        defaultColor:Proptypes.string,/** 星星试图默认颜色 */
        sum:Proptypes.number,/** 总数 默认5*/
        disabled:Proptypes.bool,/** 是否可以点击 */
        defaultIndex:Proptypes.number,/** 当前的index */
        onClickItem:Proptypes.func,/** 点击index */
        space:Proptypes.number,/** 间隔 */

    }
    static defaultProps={
        scale:1,
        defaultColor:'#666',
        activeColor:'#f37b1d',
        defaultIndex:0,
        sum:5,
        disabled:false,
        type:'star',
        space:1,
    }

    constructor(props) {
        super(props);
        this.state={
            selectIndex:this.props.defaultIndex,
            anim:[]
        }
    }
    componentWillMount(){
        var arr = [];
        var sum = this.props.sum

        if(this.props.sum<this.props.defaultIndex){
            throw new Error('sum must be greater than index');
        }

        while (sum--&&sum>=0) {arr.push(1)}
        this.setState({
            anim:arr.map(()=>new Animated.Value(0)),
        })
    }

    shouldComponentUpdate(nextProps,nextState){

        // console.log('====='+nextState.selectIndex)
        // console.log('====='+this.state.selectIndex)
        if (nextState.selectIndex!=this.state.selectIndex){
            return true;
        }
        return false;
    }


    onDidClickItem(index){
        const {
            onClickItem,
            disabled,
        }=this.props;
        const {
            anim,
        }=this.state;
        if (disabled){return}
        this.setState({
            selectIndex:index+1,
        })
        onClickItem&&onClickItem(index+1);

        Animated.spring(anim[index],{
            toValue:1,
            easing:Easing.linear,
        }).start(()=>{
            this.state.anim[index].setValue(0)
        })
    }

    drawStar(i){
        var self = this;
        const {
            scale,
            defaultColor,
            activeColor,
            style,
            space,
        }=self.props;
        const {
            selectIndex,
            anim,
        }=self.state;

        var onActive = i < selectIndex? true :false;
        var color = onActive?activeColor:style&&style.backgroundColor ?style.backgroundColor:styles.container.backgroundColor
        return (
            <TouchableWithoutFeedback
                key={i}
                underlayColor="transparent"
                onPress={()=>{
                   self.onDidClickItem(i);
                }}
            >
                <View style={{
                    width:40 * scale,
                    height:40 * scale,
                    marginLeft:i>0?space:0,
                }}>
                    <AnimStarView
                        strokeWidth={onActive?0:1}
                        stroke={defaultColor}
                        fill={color}
                        scale={anim[i].interpolate({
                            inputRange:[0,0.5,1],
                            outputRange:[scale,scale*0.9,scale]
                        })}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    drawSmile(i){
        var self = this;
        const {
            scale,
            defaultColor,
            activeColor,
            space
        }=self.props;
        const {
            selectIndex,
            anim,
        }=self.state;

        var onActive = i < selectIndex? true :false;
        var color = onActive?activeColor:defaultColor
        return (
            <TouchableWithoutFeedback
                key={i}
                underlayColor="transparent"
                onPress={()=>{
                    self.onDidClickItem(i);
                }}
            >
                <View style={{
                    width:40 * scale,
                    height:40 * scale,
                    marginLeft:i>0?space:0,
                }}>
                    <AnimSmileView
                        fill={color}
                        scale={anim[i].interpolate({
                            inputRange:[0,0.5,1],
                            outputRange:[scale,scale*0.9,scale]
                        })}
                        like={onActive}
                    />
                </View>
            </TouchableWithoutFeedback>
        )
    }


    render() {
        var self = this;
        const {
            type,
            style,
        }=self.props;
        const {
            anim,
        }=this.state
        var arr = anim.map((item,index)=>{
            if(type=='star'){
                return self.drawStar(index)
            }else {
                return self.drawSmile(index)
            }

        })
        return (
            <View style={{
                backgroundColor:'#fff',
                ...style,
                ...styles.container,
            }}>
                {arr}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
    }
});