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
import ZFCountDown from "../../components/countDown/ZFCountDown";
export default class ZFInputContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {
        super(props);
        this.state={
            content:'',
        }
    }

    shouldComponentUpdate(nextProps,nextState){

        // console.log('nextState==='+nextState.content)
        // // console.log('state==='+this.state.content)
        if(nextState.content.length>=0){
            return false;
        }
        return true
    }



    render() {
        console.log('=====shuxing')
        return (
            <View style={{
                ...cusStyle.container,
            }}>

                <ScrollView >
                    <View>
                        <ZFTitleView title="输入框" />

                        <ZFInput
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            onChangeText={(text)=>{
                                console.log(text)
                                this.setState({
                                    content:text,
                                })
                            }}

                        />

                        <ZFInput
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            defaultValue="这是默认输入的"
                        />

                        <ZFInput
                            secureTextEntry={true}
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            boxStyle={{
                                marginTop:1
                            }}
                        />


                        <ZFInput
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            boxStyle={{
                                marginTop:1
                            }}
                            rightView={
                                <ZFButtom title="获取验证码" btnStyle={{
                                    backgroundColor:'#9c26b0',
                                }} textStyle={{
                                    color:'#fff',
                                    fontSize:13
                                }} onPress={()=>{

                                }} />
                            }
                        />

                    </View>

                    <View style={{marginTop:10}}>

                        <ZFTitleView title="输入框自定义" />

                        <ZFInput
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            boxStyle={{
                                marginTop:1
                            }}
                            lable={
                                <IconFont name="ic_layout" size={25} color="#666666"  />
                            }
                            lableSel={
                                <IconFont name="ic_layout" size={25} color="#6739b6"  />
                            }
                            showIcon={true}
                            rightView={
                                <ZFButtom title="获取验证码" btnStyle={{
                                    backgroundColor:'#9c26b0',
                                }} textStyle={{
                                    color:'#fff',
                                    fontSize:13
                                }} onPress={()=>{

                                }} />
                            }
                        />
                    </View>

                    <View style={{marginTop:10}}>

                        <ZFTitleView title="输入框现在长度 11" />

                        <ZFInput
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            maxLength={11}
                            onChangeText={(text)=>{
                                console.log(text)
                                this.setState({
                                    content:text,
                                })
                            }}

                        />
                    </View>

                    <View style={{marginTop:10}}>

                        <ZFTitleView title="输入框禁止输入" />

                        <ZFInput
                            imageH={require('../../images/ic_tab_home_sel.png')}
                            image={require('../../images/ic_tab_home.png')}
                            placeholder="请输入账号密码"
                            editable={false}
                            boxStyle={{
                                marginTop:1
                            }}
                            rightView={
                                <IconFont name="ic_layout" size={25} color="#0081ff"  />
                            }
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