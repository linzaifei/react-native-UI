import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView
} from 'react-native';
import ZFCountDown from "../../components/countDown/ZFCountDown";
import ZFTitleView from "../../components/TitleView/ZFTitleView";


export default class ZFCountdownContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {

        super(props);


    }

    componentWillUnmount(){
        console.log('======销毁了')
    }

    render() {

        return (
            <SafeAreaView style={cusStyle.container}>
                <ScrollView>

                    <View>
                        <ZFTitleView title="倒计时样式" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFCountDown tpl="{d}:{h}:{m}:{s}" />
                            <ZFCountDown tpl="{h}时{m}分{s}" />

                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="倒计时边框样式" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFCountDown tpl="{h}:{m}:{s}" boxStyle={{
                                borderColor:'#6739b6',
                            }} textStyle={{
                                color:'#6739b6'
                            }} />
                            <ZFCountDown tpl="{h}时{m}分{s}"  boxStyle={{
                                borderColor:'#f37b1d',
                                borderWidth:2,
                                borderRadius:5,
                                width:30,
                                height:30,
                            }} textStyle={{
                                color:'#f37b1d'
                            }} />

                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="倒计时颜色" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFCountDown tpl="{h}:{m}:{s}" boxStyle={{
                                backgroundColor:'#6739b6',
                                borderWidth:0,
                            }} textStyle={{
                                color:'#fff'
                            }} />
                            <ZFCountDown tpl="{h}时{m}分{s}"  boxStyle={{
                                backgroundColor:'#f37b1d',
                                borderWidth:0,
                                borderRadius:5,
                            }} textStyle={{
                                color:'#fff'
                            }} time={ new Date().getTime() + 10000} completed={()=>{
                                alert('结束了')
                            }} />

                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="倒计时添加" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFCountDown tpl="{h}:{m}:{s}" boxStyle={{
                                backgroundColor:'#6739b6',
                                borderWidth:0,
                            }} textStyle={{
                                color:'#fff'
                            }} type={'up'} />
                            <ZFCountDown tpl="{h}时{m}分{s}"  boxStyle={{
                                backgroundColor:'#f37b1d',
                                borderWidth:0,
                                borderRadius:5,
                            }} textStyle={{
                                color:'#fff'
                            }} type={'up'} />

                        </View>
                    </View>



                </ScrollView>

            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});