import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    TextInput,
    SafeAreaView
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFSelectItem from "../../viewconponent/selectItem/ZFSelectItem";
import ZFSelectIcon from "../../viewconponent/selectItem/ZFSelectIcon";
import ZFIconTag from "../../components/tag/ZFIconTag";
import ZFButtom from "../../components/Buttom/ZFButtom";
import ZFSwitch from "../../components/switch/ZFSwitch";
import ZFsquare from "../../viewconponent/square/ZFsquare";
import ZFSmalTag from "../../components/tag/ZFSmalTag";
import ZFTag from "../../components/tag/ZFTag";
import ZFMessage from "../../viewconponent/message/ZFMessage";
import ZFMessageItem from "../../viewconponent/message/ZFMessageItem";
import ZFSwipeRow from "../../components/swipeRow/ZFSwipeRow";

// import SwipeableRow from 'react-native/Libraries/Experimental/SwipeableRow/SwipeableRow'

export default class ZFListContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {
        super(props);

        this.state={
            scale :new Animated.Value(0),
            list:[
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551851014827&di=efa20a8e9344920139c84e8350e78d55&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F7ed50eac2e2b4466.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551851014826&di=b94ba89b82414798b9d2efcf26a6eeaf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201504%2F25%2F20150425142538_BH3MZ.thumb.224_0.jpeg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551851014826&di=08e0d467050339b459451560972f6bfa&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fe%2Fdf%2F8b371622755_250_350.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551851014826&di=c9ccf1d3dbaa14eaefcae5936934232f&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cccab3gw1etgx429jo1g20dw07yhcc.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551851014826&di=ec6d30449dcd08e389f19036d612fd1b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F29%2F20160629233156_wKx8N.thumb.224_0.jpeg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551851014825&di=c5833802c08bb32523862472460e9d02&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181004%2F17%2F1538645580-vpJwukOanA.gif',
            ],
            listArr:[
                {
                    name:'ic_layout',
                    size:24,
                    color:'#6739b6',
                    text:'布局',
                    tag:false,
                    value:'0',
                    type:'default',
                },
                {
                    name:'ic_beijing',
                    size:24,
                    color:'#0081ff',
                    text:'背景',
                    tag:true,
                    value:'100',
                    type:'tag',
                },{
                    name:'ic_buttom',
                    size:24,
                    color:'#6739b6',
                    text:'按钮',
                    tag:false,
                    value:'0',
                },{
                    name:'ic_tag',
                    size:24,
                    color:'#e03997',
                    text:'图标',
                    tag:true,
                    value:'10',
                    type:'tag',
                },{
                    name:'ic_list',
                    size:24,
                    color:'#6739b6',
                    text:'皮肤',
                    tag:true,
                    value:'0',
                    type:'default',
                },{
                    name:'ic_tx',
                    size:24,
                    color:'#a5673f',
                    text:'通知',
                    tag:false,
                    value:'0',
                    type:'default',
                },{
                    name:'ic_bk',
                    size:24,
                    color:'#1cbbb4',
                    text:'布局',
                    tag:false,
                    value:'0',
                    type:'default',
                },{
                    name:'ic_jdt',
                    size:24,
                    color:'#6739b6',
                    text:'CVR',
                    tag:false,
                    value:'0',
                    type:'default',
                },
            ],
            space:0,
            // content:4
        }
    }

    shouldComponentUpdate(nextProps,nextState){

        // console.log('nextState==='+nextState.list.length)
        // console.log('state==='+this.state.list.length)
        // if(nextState.content.length>=0){
        //     return false;
        // }
        return true
    }

    startAnimation(isOn){
        Animated.timing(this.state.scale,{
            toValue:isOn?1:0,
        }).start()
    }


    render() {
        console.log('刷新')
        var self = this;
        const {
            space,
            listArr,
            list,

        }=self.state;
        return (
            <SafeAreaView style={{
                ...cusStyle.container,
            }}>
                <ScrollView>

                    <View style={{
                        marginBottom:10,
                    }}>
                        <ZFTitleView title="宫格" >
                            <ZFTag rightBottomView={
                                <ZFSwitch isOn={false} type={'circle'} size={'small'} onToggle={(isOn)=>{
                                    self.setState({
                                        space:isOn?1:0,
                                    })
                                }} />
                            } text="间距" textStyle={{
                                fontSize:14,
                                color:'#666',
                                marginRight:10
                            }} />

                            {/*<ZFTag rightBottomView={*/}
                               {/*<ZFButtom title="确定"  btnStyle={{*/}
                                    {/*backgroundColor:'#6739b6',*/}
                                   {/*borderRadius:30,*/}
                               {/*}} textStyle={{*/}
                                    {/*color:'#fff',*/}
                                   {/*fontSize:13,*/}
                               {/*}} onPress={()=>{*/}

                                   {/*console.log(self.input.value)*/}
                                   {/*// this.setState({*/}
                                   {/*//     content:*/}
                                   {/*// })*/}

                               {/*}} />*/}
                            {/*} leftTopView={*/}
                                {/*<TextInput style={{*/}
                                    {/*width:50,*/}
                                    {/*height:26,*/}
                                    {/*textAlign:'center',*/}
                                    {/*borderWidth:1,*/}
                                    {/*borderColor:'#6739b6',*/}
                                    {/*marginRight:5*/}
                                {/*}} placeholder="3-5" value={10} ref={o=>self.input=o}/>*/}
                            {/*} />*/}
                        </ZFTitleView>
                        <ZFsquare
                            space={space}
                            count={4}
                            borderRadius={0}
                            list={listArr}
                            onClickItem={(index)=>{
                                alert(index)
                            }}
                            tabs={(item,index,width)=>{
                                console.log(width)
                                return(
                                    <View style={{
                                        width:width,
                                        height:width/3*2,
                                        backgroundColor:'#fff',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        position:'relative'
                                    }}>
                                        {
                                            item.tag?<ZFSmalTag type={item.type} value={parseInt(item.value)>99?'99+':item.value} tagStyle={{
                                                position:'relative',
                                                top:8,
                                                left:width,
                                            }} />:null
                                        }
                                        <ZFIconTag
                                            iconSize={24}
                                            iconName={item.name}
                                            iconColor={item.color}
                                            text={item.text}
                                            direction={'bottom'}
                                            textStyle={{
                                                fontSize:12,
                                                color:'#666'
                                            }}
                                        />
                                    </View>
                                )
                            }}
                        />

                    </View>

                    <ZFTitleView title="菜单列表" >
                        <ZFTag rightBottomView={
                            <ZFSwitch isOn={false} type={'circle'} size={'small'} onToggle={(isOn)=>{
                                this.startAnimation(isOn)
                            }} />
                        } text="卡片效果" textStyle={{
                            fontSize:14,
                            color:'#666',
                            marginRight:10
                        }} />
                    </ZFTitleView>
                    <Animated.View

                    style={{
                        transform:[{
                            scale:this.state.scale.interpolate({
                                inputRange:[0,1],
                                outputRange:[1,0.95],
                            })
                        }],
                        borderRadius:this.state.scale.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,10],
                        }),
                        overflow:'hidden'
                    }}
                    >

                        <ZFSelectItem
                            uri={require('../../images/china.png')}
                            text="图片+不可编辑"
                            placeholder="图片+不可编辑"
                            itemStyle={{
                                marginTop:1
                            }}
                        />

                        <ZFSelectItem
                            uri={require('../../images/china.png')}
                            text="图片+可编辑"
                            editable={true}
                            canArrow={false}
                            placeholder="图片+可编辑"
                            itemStyle={{
                                marginTop:1
                            }}
                        />

                        <ZFSelectIcon
                            iconName="ic_layout"
                            iconSize={25}
                            iconColor="#39b54a"
                            text="图标+汉字"
                            itemStyle={{
                                marginTop:1
                            }}
                        />
                        <ZFSelectItem
                            uri={require('../../images/china.png')}
                            text="图片+可编辑"
                            editable={false}
                            placeholder="图片+不可编辑+没有箭头"
                            canArrow={false}
                            itemStyle={{
                                marginTop:1
                            }}
                        />

                        <ZFSelectItem
                            uri={require('../../images/china.png')}
                            text="按钮"
                            canArrow={false}
                            centerView={
                                <ZFButtom
                                    title="上传"
                                    btnStyle={{
                                        backgroundColor:'#6739b6',
                                        borderRadius:30,
                                    }}
                                    textStyle={{
                                        color:'#fff',
                                        fontSize:13,
                                    }}
                                />
                            }
                            itemStyle={{
                                marginTop:1
                            }}
                        />

                        <ZFSelectIcon
                            iconName="ic_wenben"
                            iconSize={25}
                            iconColor="#9c26b0"
                            text="文本"
                            canArrow={false}
                            defaultValue="这是一小段文字"
                            itemStyle={{
                                marginTop:1
                            }}
                        />


                        <ZFSelectIcon
                            iconName="ic_beijing"
                            iconSize={25}
                            iconColor="#f37b1d"
                            text="开关"
                            canArrow={false}
                            centerView={
                                <ZFSwitch onColor="#8dc63f" isOn={false} type={'circle'} size={'small'} />
                            }
                            itemStyle={{
                                marginTop:1
                            }}
                        />

                        <ZFSelectItem
                            canArrow={false}
                            leftView={
                                <View>
                                    <ZFIconTag
                                        iconName="ic_buttom"
                                        iconColor="#f37b1d"
                                        iconSize={25}
                                        text="多行Item"
                                    />
                                    <Text style={{
                                        fontSize:12,
                                        color:'#666',
                                        marginLeft:4
                                    }}> 这是多样的小详情</Text>
                                </View>
                            }
                            centerView={
                                <View style={{
                                    ...cusStyle.layout_row,
                                }}>
                                    <ZFButtom
                                        title="上传"
                                        btnStyle={{
                                            backgroundColor:'#6739b6',
                                            borderRadius:30,
                                        }}
                                        textStyle={{
                                            color:'#fff',
                                            fontSize:13,
                                        }}
                                    />
                                    <ZFButtom
                                        title="下载"
                                        btnStyle={{
                                            backgroundColor:'#6739b6',
                                            borderRadius:30,
                                            marginLeft:5
                                        }}
                                        textStyle={{
                                            color:'#fff',
                                            fontSize:13,
                                        }}
                                    />
                                </View>
                            }
                            itemStyle={{
                                marginTop:1
                            }}
                        />

                    </Animated.View>

                    <View style={{
                        marginTop:10,
                    }}>
                        <ZFTitleView title="消息类表" />

                        <ZFMessageItem
                            image={'https://image.weilanwl.com/img/square-1.jpg'}
                            title="小林子"
                            titleType={'group'}
                            titleTag="6人"
                            time="22.22"
                            messageType={'no-message'}
                            message={3}
                        />

                        <ZFMessageItem
                            image={'https://image.weilanwl.com/img/square-1.jpg'}
                            title="小林子"
                            titleType={'group'}
                            titleTag="SVIP"
                            time="20.00"
                            detailType={'envelope'}
                            messageType={'no-notice'}
                            boxStyle={{
                             marginTop:1,
                            }}
                        />

                        <ZFMessageItem
                            image={'https://image.weilanwl.com/img/square-1.jpg'}
                            title="小林子"
                            time="20.00"
                            detailType={'message'}
                            detailText={{
                                name:'我是小麦哦',
                                message:'自己自定义吧，写不下去了'
                            }}
                            messageType={'message'}
                            message={8}

                            boxStyle={{
                                marginTop:1,
                                backgroundColor:'rgba(141,198,63,0.4)'
                            }}
                        />

                    </View>

                    <View style={{
                        marginTop:10,
                    }}>
                        <ZFTitleView title="列表左滑"/>
                        <ZFSwipeRow list={[
                            {
                                value:'删除',
                                backgroundColor:'red',
                            }
                        ]} isOpen={true} >
                            <ZFMessageItem
                                image={'https://image.weilanwl.com/img/square-1.jpg'}
                                title="小林子"
                                titleType={'group'}
                                titleTag="6人"
                                time="22.22"
                                messageType={'no-message'}
                                message={3}
                            />
                        </ZFSwipeRow>

                        <ZFSwipeRow list={[
                            {
                                value:'删除',
                                backgroundColor:'red',
                            }
                        ]} subComponent={(item)=>{
                            return (
                                <ZFIconTag
                                    iconSize={20}
                                    iconName="ic_del"
                                    iconColor="#fff"
                                    text="删除"
                                    boxStyle={{backgroundColor:'transparent'}}
                                    textStyle={{color:'#fff'}}
                                />
                            )
                        }} >
                            <ZFMessageItem
                                image={'https://image.weilanwl.com/img/square-1.jpg'}
                                title="小林子"
                                titleType={'group'}
                                titleTag="6人"
                                time="22.22"
                                messageType={'no-message'}
                                message={3}
                            />
                        </ZFSwipeRow>

                        <ZFSwipeRow list={[
                            {
                                value:'置顶',
                                backgroundColor:'grey',
                            },
                            {
                                value:'删除',
                                backgroundColor:'red',
                            }
                        ]} onClickItem={(index)=>{
                            alert(index)
                        }} >
                            <ZFMessageItem
                                image={'https://image.weilanwl.com/img/square-1.jpg'}
                                title="小林子"
                                titleType={'group'}
                                titleTag="6人"
                                time="22.22"
                                messageType={'no-message'}
                                message={3}
                            />
                        </ZFSwipeRow>

                    </View>

                    <View style={{
                        marginTop:10,
                    }}>
                        <ZFTitleView title="宫格图片选择" />
                        <ZFsquare
                            space={5}
                            count={4}
                            borderRadius={5}
                            canAdd={true}
                            list={list}
                            onClickItem={(index)=>{
                                alert(index)
                            }}
                        />

                    </View>


                </ScrollView>
            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});