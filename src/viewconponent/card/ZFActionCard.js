import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ViewPropTypes,

} from 'react-native';

import PropTypes from 'prop-types'
import ZFCardHeader from "./ZFCardHeader";
import ZFsquare from "../square/ZFsquare";
import ZFCommentCell from "./ZFCommentCell";
export default class ZFActionCard extends Component {
    static propTypes = {
        ...ZFCardHeader.propTypes,
        cardStyle:ViewPropTypes.style,
        contentStyle:ViewPropTypes.style,
        content:PropTypes.string,/** 内容*/
        list:PropTypes.array,/** 图片数组 */

        zan:PropTypes.number,
        msg:PropTypes.number,
        look:PropTypes.number,

    }

    static defaultProps = {
        zan:0,
        msg:0,
        look:0,
        list:[],

    }
    constructor(props) {
        super(props);
        this.state={
            width:0
        }
    }

    getImag(){
        const {
            list
        }=this.props;
        const {
            width,
        }=this.state;

        if (list.length==0){
            return null;
        }
        if (list.length==1){
            return(
                <Image source={{uri:list[0]}} style={{
                    width:width-50,
                    height:(width-50)/3*2,
                    borderRadius:10,
                    marginTop:5,
                }} />
            )
        }else {
            return (
                <ZFsquare
                    margin={5}
                    space={5}
                    list={list}
                    backgroundColor="#fff"
                />
            )
        }
    }


    render() {
        const {
            zan,
            look,
            msg,
            cardStyle,
            content,
            contentStyle,
        }=this.props;

        return (
            <View style={{
                ...styles.container,
                ...cardStyle,
            }} onLayout={(e)=>{
                this.setState({
                    width:e.nativeEvent.layout.width,
                })
            }}>
                <ZFCardHeader
                    {...this.props}
                />
                <Text style={{
                    ...contentStyle
                }}>{content}</Text>
                {this.getImag()}

                <View style={{
                    justifyContent:'flex-end',
                    flexDirection:'row'
                }}>
                    <ZFCommentCell list={
                        [
                            {
                                name:'ic_look',
                                color:'#8799a3',
                                size:16,
                                textSize:11,
                                value:look,
                                textColor:'#8799a3',
                            },{
                            name:'ic_zan',
                            color:'#8799a3',
                            size:12,
                            textSize:11,
                            value:zan,
                            textColor:'#8799a3',
                        },{
                            name:'ic_xiaoxi',
                            color:'#8799a3',
                            size:12,
                            textSize:11,
                            value:msg,
                            textColor:'#8799a3',
                        }

                        ]
                    } />
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        padding:10
    },
    contentStyle:{
        fontSize:15,
        color:'#666',
    }
});