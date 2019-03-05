import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import  IconFont from '../../Icon/IconFont'
import ZFBgIcon from "../custom/ZFBgIcon";

export default class ZFComponent extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:'基础控件'
        }
    }
    constructor(props) {
        super(props);
        this.state={
            elements: [
                { title: '输入框', name: 'Input', color: '#f37b1d', icon: 'ic_buttom' ,pushName:'inputContrl'},
                { title: '列表', name: 'List', color: '#39b54a', icon: 'ic_jdt' ,pushName:'listContrl'},
                { title: '开关', name: 'Switch', color: '#1cbbb4', icon: 'ic_wenben' ,pushName:'switchContrl'},
                { title: '滑块', name: 'Slider', color: '#0081ff', icon: 'ic_beijing' ,pushName:'sliderContrl'},
                { title: '加载', name: 'Loading', color: '#6739b6', icon: 'ic_loadding' ,pushName:'loaddingContrl'},
                { title: '步进器 ', name: 'Stepper', color: '#9c26b0', icon: 'ic_tubiao' ,pushName:'stepperContrl'},
                { title: '倒计时', name: 'CountDown', color: '#a5673f', icon: 'ic_bk' ,pushName:'countdownContrl'},
                { title: '标签', name: 'Tag', color: '#e03997', icon: 'ic_tag' ,pushName:'tagContrl'},
            ],
        }
    }

    _item(){
        var list = [];
        var self = this;

        const {
            elements,
        }=self.state;

        elements.map((item,index)=>{
            list.push(
                <ZFBgIcon key={index} boxStyle={{
                    borderRadius:5,
                    backgroundColor:item.color,
                    width:SCREEN_WIDTH /2.5,
                    marginTop:20,
                }} onPress={()=>{
                    self.props.navigation.navigate(item.pushName,{
                        title:item.title,
                    })
                }} title={item.title} detail={item.name} icon={<IconFont name={item.icon} size={20} color="#fff" />} />
            )
        })
        return list;
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView>
                    <View style={styles.icon}>
                        {this._item()}
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
    icon:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    }
});