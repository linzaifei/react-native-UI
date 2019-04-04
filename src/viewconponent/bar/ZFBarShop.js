import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';
import ZFCommentCell from "../card/ZFCommentCell";
import PropTypes from 'prop-types'
import ZFButtom from "../../components/Buttom/ZFButton";

export default class ZFBarShop extends Component {

    static propTypes = {
        barStyle:ViewPropTypes.style,
        rightView:PropTypes.element,
        rightStyle:ViewPropTypes.style,
        list:PropTypes.array,
        rightList:PropTypes.array,
        onClickItem:PropTypes.func,
        onClickRightItem:PropTypes.func,
    }

    static defaultProps = {
        list:[
            {
                name:'ic_kefu',
                color:'#39b54a',
                size:23,
                value:'客服',
                textColor:'#333',
            },{
                name:'ic_shop',
                color:'#8799a3',
                size:23,
                value:'商铺',
                textColor:'#8799a3',
            },{
                name:'ic_car',
                color:'#8799a3',
                size:23,
                value:'购物车',
                textColor:'#8799a3',
            }
        ],
        rightList:[{
            title:'加入购物车',
            size:17,
            color:'#fff',
            backgroundColor:'#e54d42',
        }]
    }
    constructor(props) {
        super(props);
        this.state={


        }
    }

    getRightView(){

        const {
            rightList,
            onClickRightItem,
        }=this.props;
        var arr = [];

        rightList.map((item,index)=>{
            arr.push(
                <ZFButtom
                    onPress={()=>{
                        onClickRightItem&&onClickRightItem(index)
                    }}
                    key={index}
                    title={item.title}
                    animation={false}
                    btnStyle={{
                        backgroundColor:item.backgroundColor,
                        flex:1,
                        borderRadius:0,
                        height:'100%'
                    }}
                    textStyle={{
                        color:item.color,
                        fontSize:item.size
                    }}
                />
            )
        })
        return arr;
    }

    render() {
        const {
            list,
            rightStyle,
            rightView,
            onClickItem,
            barStyle,
        }=this.props;
        return (
            <View style={{
                ...barStyle,
                ...styles.container,
            }}>
                <ZFCommentCell
                    list={list}
                    direction={'bottom'}
                    onClickItem={onClickItem}
                    subStyle={{
                        width:70,
                        borderStyle:'solid',
                        borderRightWidth:1,
                        borderColor:'#eee'
                    }}
                    textStyle={{
                        marginTop:5,
                        fontSize:12
                    }}
                />

                {
                    rightView?rightView:
                        <View style={{
                            ...styles.rightStyle,
                            ...rightStyle,
                            flex:1,
                            height:'100%'
                        }}>
                            {this.getRightView()}
                        </View>
                }
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center'
    },
    rightStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    }
});