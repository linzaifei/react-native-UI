import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
} from 'react-native';
import ZFInput from "../../viewconponent/input/ZFInput";

import IconFont from '../../Icon/IconFont'
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFButtom from "../../components/Buttom/ZFButtom";
import ZFCard from "../../viewconponent/card/ZFCard";
import ZFActionCard from "../../viewconponent/card/ZFActionCard";
import ZFSwitch from "../../components/switch/ZFSwitch";

export default class ZFCardContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {
        super(props);
        this.state={
            bgImage:'https://image.weilanwl.com/img/4x3-1.jpg',
            list:[
                'https://image.weilanwl.com/img/square-4.jpg',
                'https://image.weilanwl.com/img/square-3.jpg',
                'https://image.weilanwl.com/img/square-4.jpg',
                'https://image.weilanwl.com/img/square-2.jpg',
                'https://image.weilanwl.com/img/square-1.jpg',
                'https://image.weilanwl.com/img/square-3.jpg',
                'https://image.weilanwl.com/img/square-2.jpg',
                'https://image.weilanwl.com/img/square-1.jpg',
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
        }=this.state;
        return (
            <View style={{
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
                            image="https://image.weilanwl.com/img/square-4.jpg"
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

                            image="https://image.weilanwl.com/img/square-4.jpg"
                            title="小猫咪"
                            detail="2018-10-20"
                            content="中国是世界四大文明古国之一，也是现仅存的文明古国，连续性五千年的文化传播，在亚洲东方形成了中国文明为代表的文化圈，这是我们的骄傲和自豪。在这五千多年中，辽阔的中华大地上"
                            list={action?['https://image.weilanwl.com/img/square-1.jpg']:list}
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

                        {/*<ZFActionCard*/}

                            {/*image="https://image.weilanwl.com/img/square-4.jpg"*/}
                            {/*title="小猫咪"*/}
                            {/*detail="2018-10-20"*/}
                            {/*content="中国是世界四大文明古国之一，也是现仅存的文明古国，连续性五千年的文化传播"*/}
                            {/*list={['https://image.weilanwl.com/img/square-4.jpg']}*/}
                            {/*zan={5}*/}
                            {/*msg={20}*/}
                            {/*look={40}*/}
                            {/*cardStyle={{*/}
                                {/*margin:10,*/}
                                {/*borderRadius:8,*/}
                            {/*}}*/}
                            {/*cardHeaderStyle={{*/}
                                {/*marginBottom:5,*/}
                            {/*}}*/}
                            {/*imgStyle={{*/}
                                {/*borderRadius:55/2.0,*/}
                            {/*}}*/}
                        {/*/>*/}

                    </View>


                </ScrollView>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});