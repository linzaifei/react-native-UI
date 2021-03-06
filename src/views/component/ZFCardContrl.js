import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    SafeAreaView,
} from 'react-native';
import ZFInput from "../../viewconponent/input/ZFInput";

import IconFont from '../../Icon/IconFont'
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFButtom from "../../components/Buttom/ZFButton";
import ZFCard from "../../viewconponent/card/ZFCard";
import ZFActionCard from "../../viewconponent/card/ZFActionCard";
import ZFSwitch from "../../components/switch/ZFSwitch";
import ZFStoryCard from "../../viewconponent/card/ZFStoryCard";

export default class ZFCardContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }
//http://sowcar.com/t6/690/1553669958x2890191853.jpg
    //http://sowcar.com/t6/690/1553669975x2890191853.jpg
    constructor(props) {
        super(props);
        this.state={
            bgImage:'http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg',
            headerImg:'http://img95.699pic.com/photo/50075/5724.jpg_wh300.jpg',
            list:[
                'http://img95.699pic.com/photo/50075/5724.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50121/4224.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50075/5724.jpg_wh300.jpg',
                'http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg',
            ],
            action:false,

        }
    }

    shouldComponentUpdate(nextProps,nextState){

        console.log('nextState==='+nextState.content)
        console.log('state==='+this.state.content)
        // if(nextState.content.length>=0){
        //     return false;
        // }
        return true
    }



    render() {
        console.log('=====刷新')
        const {
            bgImage,
            list,
            action,
            headerImg,
        }=this.state;
        return (
            <SafeAreaView style={{
                ...cusStyle.container,
            }}>

                <ScrollView >
                    <View>
                        <ZFTitleView title="案例类卡片" />
                        <ZFCard
                            carStyle={{
                                margin:10,
                            }}
                            bgImage={bgImage}
                            content="我和可爱的小猫咪"
                            image={headerImg}
                            title="小猫咪"
                            detail="十天前"
                            cardHeaderStyle={{
                                margin:6,
                            }}
                            zan={5}
                            msg={20}
                            look={40}
                        />

                    </View>

                    <View>
                        <ZFTitleView title="动态类卡片" >
                            <ZFSwitch isOn={false} type={'butt'} size={'small'} onToggle={(isOn)=>{
                                this.setState({
                                    action:isOn,
                                })
                            }} />
                        </ZFTitleView>
                        <ZFActionCard
                            image={headerImg}
                            title="小猫咪"
                            detail="2018-10-20"
                            content="中国是世界四大文明古国之一，也是现仅存的文明古国，连续性五千年的文化传播，在亚洲东方形成了中国文明为代表的文化圈，这是我们的骄傲和自豪。在这五千多年中，辽阔的中华大地上"
                            list={action?['http://img95.699pic.com/photo/50032/1554.jpg_wh300.jpg']:list}
                            zan={5}
                            msg={20}
                            look={40}
                            cardStyle={{
                                margin:10,
                                borderRadius:8,
                            }}
                            cardHeaderStyle={{
                                marginBottom:5,
                            }}
                            imgStyle={{
                                borderRadius:55/2.0,
                            }}
                        />
                    </View>

                    <View>
                        <ZFTitleView title="故事类卡片" />
                        <ZFStoryCard
                            image={headerImg}
                            title="中国是世界四大文明古国之一"
                            content="中国是世界四大文明古国之一，也是现仅存的文明古国，连续性五千年的文化传播，"
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