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
import ZFButtom from "../../components/Buttom/ZFButton";
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
            bgImage:'http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg',
            headerImg:'http://img95.699pic.com/photo/50075/5724.jpg_wh300.jpg',
            list:[
                'http://img95.699pic.com/photo/50075/5724.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50121/4224.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50075/5724.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg',
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
            headerImg
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
                                            size={24}
                                            name={item.name}
                                            color={item.color}
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
                            name="ic_layout"
                            size={25}
                            color="#39b54a"
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
                            name="ic_wenben"
                            size={25}
                            color="#9c26b0"
                            text="文本"
                            canArrow={false}
                            defaultValue="这是一小段文字"
                            itemStyle={{
                                marginTop:1
                            }}
                        />


                        <ZFSelectIcon
                            name="ic_beijing"
                            size={25}
                            color="#f37b1d"
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
                                        name="ic_buttom"
                                        color="#f37b1d"
                                        size={25}
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
                            image={headerImg}
                            title="小林子"
                            titleType={'group'}
                            titleTag="6人"
                            time="22.22"
                            messageType={'no-message'}
                            message={3}
                        />

                        <ZFMessageItem
                            image={headerImg}
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
                            image={headerImg}
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
                                image={headerImg}
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
                                    size={20}
                                    name="ic_del"
                                    color="#fff"
                                    text="删除"
                                    boxStyle={{backgroundColor:'transparent'}}
                                    textStyle={{color:'#fff'}}
                                />
                            )
                        }} >
                            <ZFMessageItem
                                image={headerImg}
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
                                image={headerImg}
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