import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFButtom from "../../components/Buttom/ZFButton";

import IconFont from '../../Icon/IconFont'

import colorList from '../../config/color.json'

export default class ZFButtomContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {
        super(props);

    }

    colorBtn(hollow){
        var list = []
        colorList.map((item,index)=>{
            list.push(
                <ZFButtom key={index} btnStyle={{
                    marginTop:5,
                    backgroundColor:hollow?'transparent':item.color
                }} title={item.title} textStyle={{color:hollow?item.color:'#fff'}} hollow={hollow} />
            )
        })
        return list;
    }

    componentWillUnmount(){
        console.log('======销毁了')
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <ZFTitleView title="按钮形状" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            justifyContent:'space-around'
                        }}>
                            <ZFButtom title="默认" />
                            <ZFButtom title="圆角" btnStyle={{
                                borderRadius:30
                            }} />
                            <ZFButtom>
                                <IconFont
                                    name={'ic_beijing'}
                                    size={20}
                                    color='#333'
                                />
                            </ZFButtom>
                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="按钮颜色" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#f1f1f1',
                            marginTop:1,
                            justifyContent:'space-around',
                            flexWrap:'wrap',
                        }}>
                            {this.colorBtn()}

                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="镂空按钮" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#f1f1f1',
                            marginTop:1,
                            justifyContent:'space-around',
                            flexWrap:'wrap',
                        }}>
                            {this.colorBtn(true)}

                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="条形按钮" />

                        <ZFButtom title="玄灰" btnStyle={{
                            backgroundColor:'#8799a3',
                            marginLeft:20,
                            marginRight:20,
                            marginTop:10,
                        }} textStyle={{
                            color:'#fff',
                            fontSize:18,
                        }} />
                        <ZFButtom title="嫣红" btnStyle={{
                            backgroundColor:'#e54d42',
                            marginLeft:20,
                            marginRight:20,
                            marginTop:10,
                        }} textStyle={{
                            color:'#fff',
                            fontSize:18,
                        }}/>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="无效状态" />

                        <ZFButtom title="无效状态" disabled={true} btnStyle={{
                            backgroundColor:'#0081ff',
                            marginLeft:20,
                            marginRight:20,
                            marginTop:10,
                        }} textStyle={{
                            color:'#fff',
                            fontSize:18,
                        }} />
                        <ZFButtom title="无效状态" hollow={true} disabled={true} btnStyle={{
                            backgroundColor:'#f0f0f0',
                            marginLeft:20,
                            marginRight:20,
                            marginTop:10,
                        }} textStyle={{
                            color:'#fff',
                            fontSize:18,
                        }}/>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="按钮加图标" />

                        <ZFButtom  hollow={true} btnStyle={{
                            marginLeft:20,
                            marginRight:20,
                            marginTop:10,
                        }} textStyle={{
                            color:'orange',
                            fontSize:18,
                        }} >
                            <View style={cusStyle.layout_row}>
                                <IconFont
                                    name={'ic_beijing'}
                                    size={20}
                                    color='orange'
                                />
                                <Text style={{color:'orange',marginLeft:5}}>图标</Text>
                            </View>
                        </ZFButtom>
                        <ZFButtom  btnStyle={{
                            backgroundColor:'#e54d42',
                            marginLeft:20,
                            marginRight:20,
                            marginTop:10,
                        }} textStyle={{
                            color:'orange',
                            fontSize:18,
                        }} >
                            <View style={cusStyle.layout_row}>
                                <ActivityIndicator color="#fff"  />
                                <Text style={{color:'#fff',marginLeft:5}}>图标</Text>
                            </View>
                        </ZFButtom>
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f1f1f1'
    },
    layout_row:{


    }
});