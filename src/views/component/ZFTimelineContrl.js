import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFTimeLine from "../../viewconponent/timeline/ZFTimeLine";

import IconFont from '../../Icon/IconFont'
import ZFImageView from "../../components/imageView/ZFImageView";
import ZFActionCard from "../../viewconponent/card/ZFActionCard";
import ZFStoryCard from "../../viewconponent/card/ZFStoryCard";
import ZFSwipeRow from "../../components/swipeRow/ZFSwipeRow";
import ZFMessageItem from "../../viewconponent/message/ZFMessageItem";
import ZFCapsule from "../../components/tag/ZFCapsule";
export default class ZFTimelineContrl extends Component {


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
            <SafeAreaView style={{
                ...cusStyle.container,
            }}>
                <ScrollView>

                    <ZFTitleView title="时间轴" />

                    <ZFTimeLine
                        leftValue="12:12"
                        rightValue="浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月"
                    />
                    <ZFTimeLine
                        leftTagView={
                            <IconFont
                                name="ic_jingyin"
                                color="#666"
                                size={13}
                            />
                        }
                        rightValue="忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴"
                        rightStyle={{
                            backgroundColor:'#e54d42'
                        }}
                    />
                    <ZFTimeLine
                        leftTagView={
                            <ZFImageView
                                image={require('../../images/china.png')}
                                imageStyle={{
                                    width:20,
                                    height:20
                                }}
                            />
                        }
                        rightValue="千呼万唤始出来"
                        rightStyle={{
                            backgroundColor:'#f37b1d'
                        }}
                    />

                    <ZFTimeLine
                        leftTagView={
                            <IconFont
                                name="ic_yuan"
                                color="#e54d42"
                                size={13}
                            />
                        }
                        rightView={
                            <View>
                                <Text style={{
                                    fontSize:15,
                                    color:'#fff',
                                    backgroundColor:'#6739b6',
                                    padding:8,
                                }}>
                                    犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事
                                </Text>
                                <Text style={{
                                    fontSize:15,
                                    color:'#fff',
                                    backgroundColor:'#8799a3',
                                    padding:8,
                                    marginTop:10,
                                }}>
                                    轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。
                                </Text>
                            </View>
                        }

                        rightStyle={{
                            backgroundColor:'#fff'
                        }}
                    />

                    <ZFTimeLine
                        leftTagView={
                            <IconFont
                                name="ic_yuan"
                                color="#e54d42"
                                size={13}
                            />
                        }

                        rightView={
                            <ZFStoryCard
                                image="http://sowcar.com/t6/690/1553670017x2890191853.jpg"
                                title="《琵琶行-白居易》"
                                content="冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，"
                                tags={[{
                                    value:'中国文化',
                                    color:'#e54d42',
                                    bgColor:'rgba(229,77,66,0.2)',
                                    size:12,
                                },{
                                    value:'文明古国',
                                    color:'#39b54a',
                                    bgColor:'rgba(57,181,74,0.2)',
                                    size:12,
                                }]}
                                boxStyle={{
                                    backgroundColor:'#f2f2f2',
                                    borderRadius:3,
                                }}
                            />
                        }

                        rightStyle={{
                            backgroundColor:'#fff'
                        }}
                    />

                    <ZFTimeLine
                        leftTagView={
                            <IconFont
                                name="ic_yuan"
                                color="#e54d42"
                                size={13}
                            />
                        }

                        rightView={
                            <ZFSwipeRow list={[
                                {
                                    value:'删除',
                                    backgroundColor:'red',
                                }
                            ]} >
                                <ZFMessageItem
                                    image={'http://sowcar.com/t6/690/1553670017x2890191853.jpg'}
                                    title="小林子"
                                    titleType={'group'}
                                    titleTag="6人"
                                    time="22.22"
                                    messageType={'no-message'}
                                    message={3}
                                    boxStyle={{
                                        backgroundColor:'#f2f2f2'
                                    }}
                                />
                            </ZFSwipeRow>
                        }

                        rightStyle={{
                            backgroundColor:'#fff'
                        }}
                    />


                    <ZFTimeLine
                        leftTagView={
                            <IconFont
                                name="ic_yuan"
                                color="#e54d42"
                                size={13}
                            />
                        }

                        rightView={
                            <View style={{
                                backgroundColor:'#f2f2f2',
                                borderRadius:5,
                                padding:8,
                            }}>
                                <ZFCapsule
                                    leftValue="下午"
                                    rightValue="16：41"
                                    cap={'round'}
                                />
                                <Text style={{
                                    fontSize:14,
                                    color:'#666',
                                    marginTop:5,

                                }}>
                                    铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。沉吟放拨插弦中，整顿衣裳起敛容。自言本是京城女，家在虾蟆陵下住。
                                </Text>
                            </View>
                        }

                        rightStyle={{
                            backgroundColor:'#fff'
                        }}
                    />








                </ScrollView>

            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});