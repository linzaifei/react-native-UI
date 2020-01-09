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
import ZFSwitch from "../../components/switch/ZFSwitch";

export default class ZFButtomContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {
        super(props);
        this.state={
            canTag:false,
            hollow:false,
            disabled:true,
        }

    }

    colorBtn(){
        const {
            hollow,
        }=this.state
        return colorList.map((item,index)=>{
            return (
                <ZFButtom
                    key={index}
                    title={item.title}

                    btnStyle={{
                        marginTop:5,
                        backgroundColor:item.color
                     }}
                    textStyle={{
                        color:hollow? item.color: '#fff'
                    }}
                    hollow={hollow} />
            )
        });
    }

    componentWillUnmount(){
        console.log('======销毁了')
    }


    render() {
        let self = this;

        const {
            canTag,
            hollow,
            disabled,
        }=self.state

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <ZFTitleView title="按钮形状" canTag={canTag} />

                    <View style={{
                        ...styles.defaultStyle,
                        ...cusStyle.layout_row,
                    }}>
                        <ZFButtom title="默认"
                                  onPress={()=>{
                                      self.setState({
                                          canTag:!self.state.canTag
                                      })
                                  }}
                        />
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
                    <ZFTitleView title="按钮颜色"  >
                        <ZFSwitch
                            isOn={false}
                            onToggle={(isOn)=>{
                                self.setState({
                                    hollow:isOn,
                                })
                            }}
                        />
                    </ZFTitleView>

                    <View style={{
                        ...cusStyle.layout_row,
                        ...styles.defaultStyle,
                        flexWrap:'wrap',
                    }}>
                        {this.colorBtn()}
                    </View>



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

                    <ZFTitleView title="无效状态" >
                        <ZFSwitch
                            isOn={true}
                            onColor="#e54d42"
                            onToggle={(isOn)=>{
                                self.setState({
                                    disabled:isOn,
                                })
                            }}
                        />
                    </ZFTitleView>

                    <ZFButtom title="无效状态" disabled={disabled} btnStyle={{
                        backgroundColor:'#0081ff',
                        marginLeft:20,
                        marginRight:20,
                        marginTop:10,
                    }} textStyle={{
                        color:'#fff',
                        fontSize:18,
                    }} />
                    <ZFButtom title="无效状态" hollow={true} disabled={disabled} btnStyle={{
                        marginLeft:20,
                        marginRight:20,
                        marginTop:10,
                    }} textStyle={{
                        color:'#e54d42',
                        fontSize:18,
                    }}/>


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

    },

    defaultStyle:{
        padding:10,
        backgroundColor:'#fff',
        marginTop:1,
        justifyContent:'space-around'
    }

});