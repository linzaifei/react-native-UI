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
                { title: '卡片', name: 'Card', color: '#1cbbb4', icon: 'ic_wenben' ,pushName:'cardContrl'},
                { title: '操作条', name: 'Bar', color: '#0081ff', icon: 'ic_beijing' ,pushName:'barContrl'},
                { title: '时间轴', name: 'Timeline', color: '#6739b6', icon: 'ic_loadding' ,pushName:'timelineContrl'},
                { title: '模态框', name: 'Modal', color: '#e03997', icon: 'ic_tag' ,pushName:'modalContrl'},
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