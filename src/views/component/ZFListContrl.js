import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFSelectItem from "../../viewconponent/selectItem/ZFSelectItem";
import ZFSelectIcon from "../../viewconponent/selectItem/ZFSelectIcon";
import ZFIconTag from "../../components/tag/ZFIconTag";
import ZFButtom from "../../components/Buttom/ZFButtom";
import ZFSwitch from "../../components/switch/ZFSwitch";
import ZFsquare from "../../viewconponent/square/ZFsquare";


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
                'https://image.weilanwl.com/img/square-2.jpg',
                'https://image.weilanwl.com/img/square-1.jpg',
                'https://image.weilanwl.com/img/square-2.jpg',
                'https://image.weilanwl.com/img/square-1.jpg',
                'https://image.weilanwl.com/img/square-3.jpg',
                'https://image.weilanwl.com/img/square-4.jpg',
            ],
            listArr:[
                {
                    name:'ic_layout',
                    size:24,
                    color:'#6739b6',
                    text:'布局',
                },
                {
                    name:'ic_beijing',
                    size:24,
                    color:'#0081ff',
                    text:'背景'
                },{
                    name:'ic_buttom',
                    size:24,
                    color:'#6739b6',
                    text:'按钮'
                },{
                    name:'ic_tag',
                    size:24,
                    color:'#e03997',
                    text:'图标'
                },{
                    name:'ic_list',
                    size:24,
                    color:'#6739b6',
                    text:'皮肤'
                },{
                    name:'ic_tx',
                    size:24,
                    color:'#6739b6',
                    text:'通知'
                },{
                    name:'ic_bk',
                    size:24,
                    color:'#6739b6',
                    text:'布局'
                },{
                    name:'ic_jdt',
                    size:24,
                    color:'#6739b6',
                    text:'CVR'
                },
            ]
        }
    }

    shouldComponentUpdate(nextProps,nextState){

        console.log('nextState==='+nextState.list.length)
        console.log('state==='+this.state.list.length)
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
        return (
            <View style={{
                ...cusStyle.container,
            }}>
                <ScrollView>

                    <View style={{
                        marginBottom:10,
                    }}>
                        <ZFTitleView title='宫格' />
                        <ZFsquare
                            space={1}
                            count={4}
                            borderRadius={0}
                            list={this.state.listArr}
                            tabs={(item,index,width)=>{
                                return(
                                    <View style={{
                                        width:width,
                                        height:width/3*2,
                                        backgroundColor:'#fff',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}>
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
                        <View style={{
                            ...cusStyle.layout_row
                        }}>
                            <Text style={{
                                fontSize:14,
                                color:'#666',
                                marginRight:10
                            }}> 卡片效果</Text>
                            <ZFSwitch isOn={false} type={'circle'} size={'small'} onToggle={(isOn)=>{
                                this.startAnimation(isOn)
                            }} />
                        </View>
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

                    </View>


                </ScrollView>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});