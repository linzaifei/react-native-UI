import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import ZFBarShop from "../../viewconponent/bar/ZFBarShop";
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFButtom from "../../components/Buttom/ZFButtom";
import ZFSearchBar from "../../viewconponent/bar/searchBar/ZFSearchBar";
import ZFImageView from "../../components/imageView/ZFImageView";
import ZFIconTag from "../../components/tag/ZFIconTag";
import ZFSendBar from "../../viewconponent/bar/ZFSendBar";
import ZFTag from "../../components/tag/ZFTag";
import IconFont from '../../Icon/IconFont'

export default class ZFBarContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View style={{
                ...cusStyle.container
            }}>

                <ScrollView>
                   <View>
                       <ZFTitleView title="操作栏" />
                       <ZFBarShop barStyle={{
                           marginTop:10,
                       }} />

                       <ZFBarShop
                           rightList={[{
                               title:'加入购物车',
                               size:15,
                               color:'#fff',
                               backgroundColor:'#e54d42',
                           },{
                               title:'立即购买',
                               size:15,
                               color:'#fff',
                               backgroundColor:'#f37b1d',
                           },]}
                           barStyle={{
                               marginTop:10,

                           }}
                       />

                       <ZFBarShop
                           list={[
                               {
                                   name:'ic_kefu',
                                   color:'#39b54a',
                                   size:23,
                                   value:'客服',
                                   textColor:'#333',
                               },{
                                   name:'ic_car',
                                   color:'#8799a3',
                                   size:23,
                                   value:'购物车',
                                   textColor:'#8799a3',
                               }
                           ]}
                           rightList={[{
                               title:'加入购物车',
                               size:15,
                               color:'#fff',
                               backgroundColor:'#e54d42',
                           },{
                               title:'立即购买',
                               size:15,
                               color:'#fff',
                               backgroundColor:'#f37b1d',
                           },]}
                           barStyle={{
                               marginTop:10,

                           }}
                       />

                       <ZFBarShop
                           list={[
                               {
                                   name:'ic_kefu',
                                   color:'#39b54a',
                                   size:23,
                                   value:'客服',
                                   textColor:'#333',
                               }, {
                                   name:'ic_store',
                                   color:'#f37b1d',
                                   size:23,
                                   value:'收藏',
                                   textColor:'#333',
                               },{
                                   name:'ic_car',
                                   color:'#8799a3',
                                   size:23,
                                   value:'购物车',
                                   textColor:'#8799a3',
                               }
                           ]}
                           rightView={

                               <View style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                   justifyContent:'space-around',
                                   flex:1,
                               }}>
                                   <ZFButtom
                                       title="加入购物车"
                                       btnStyle={{
                                           backgroundColor:'#e54d42'
                                       }}
                                       textStyle={{
                                           fontSize:13,
                                           color:'#fff'
                                       }}
                                   />
                                   <ZFButtom
                                       title="立即购买"
                                       btnStyle={{
                                           backgroundColor:'#f37b1d'
                                       }}
                                       textStyle={{
                                           fontSize:13,
                                           color:'#fff'
                                       }}
                                   />
                               </View>
                           }
                           barStyle={{
                               marginTop:10,

                           }}
                       />

                   </View>

                    <View style={{
                        marginTop:10,
                    }}>
                        <ZFTitleView title="搜索栏" />

                        <ZFSearchBar
                            placeholder="搜索图片、文字、视频"
                            onChangeText={(text)=>{
                                console.log('===='+text)
                            }}
                            barStyle={{
                                marginTop:5,
                            }}
                        />
                        <ZFSearchBar

                            placeholder="搜索图片、文字、视频"
                            leftView={
                                <ZFImageView
                                    image={'https://image.weilanwl.com/img/square-1.jpg'}
                                    imageStyle={{
                                        width:28,
                                        height:28,
                                        borderRadius:14,
                                        marginRight:5,
                                    }}
                                />
                            }
                            rightView={
                                <ZFIconTag
                                    color="#666666"
                                    size={14}
                                    name="ic_sanjiao"
                                    text="广州"
                                    direction="left"
                                    textStyle={{
                                        fontSize:13,
                                    }}
                                />
                            }

                            onChangeText={(text)=>{
                                console.log('===='+text)
                            }}
                            barStyle={{
                                marginTop:5,
                            }}
                            style={{
                                borderRadius:20
                            }}
                        />

                        <ZFSearchBar

                            placeholder="搜索图片、文字、视频"
                            leftView={
                                <ZFImageView
                                    image={'https://image.weilanwl.com/img/square-1.jpg'}
                                    imageStyle={{
                                        width:28,
                                        height:28,
                                        borderRadius:14,
                                        marginRight:5,
                                    }}
                                />
                            }
                            rightView={
                                <ZFIconTag
                                    color="#fff"
                                    size={14}
                                    name="ic_sanjiao"
                                    text="广州"
                                    direction="left"
                                    textStyle={{
                                        fontSize:13,
                                        color:'#fff'
                                    }}
                                    boxStyle={{
                                        backgroundColor:'transparent'
                                    }}
                                />
                            }

                            onChangeText={(text)=>{
                                console.log('===='+text)
                            }}
                            barStyle={{
                                marginTop:5,
                                backgroundColor:'#e54d42'
                            }}
                        />

                        <ZFSearchBar

                            placeholder="搜索图片、文字、视频"
                            rightView={
                                <ZFIconTag
                                    color="#fff"
                                    size={13}
                                    name="ic_cancel"
                                    text="取消"
                                    textStyle={{
                                        fontSize:13,
                                        color:'#fff',
                                        marginLeft:2
                                    }}
                                    boxStyle={{
                                        backgroundColor:'transparent'
                                    }}
                                />
                            }

                            onChangeText={(text)=>{
                                console.log('===='+text)
                            }}
                            barStyle={{
                                marginTop:5,
                                backgroundColor:'#1cbbb4'
                            }}
                        />

                    </View>


                    <View style={{
                        marginTop:10,
                    }}>
                        <ZFTitleView title="输入操作条" />

                        <ZFSendBar
                            onChangeText={(text)=>{
                                console.log('===='+text)
                            }}
                            sendStyle={{
                                marginTop:5,
                            }}
                        />

                        <ZFSendBar

                            leftView={
                                <ZFTag
                                    leftTopView={
                                        <ZFImageView
                                            image={'https://image.weilanwl.com/img/square-1.jpg'}
                                            imageStyle={{
                                                width:28,
                                                height:28,
                                                borderRadius:14,
                                            }}
                                        />
                                    }
                                    rightBottomView={
                                        <ZFButtom btnStyle={{
                                            backgroundColor:'transparent'
                                        }}>
                                            <IconFont
                                                name="ic_add"
                                                size={28}
                                                color="#666"
                                            />
                                        </ZFButtom>
                                    }
                                />

                            }
                            onChangeText={(text)=>{
                                console.log('===='+text)
                            }}
                            sendStyle={{
                                marginTop:5,
                            }}
                        />


                    </View>

                </ScrollView>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});