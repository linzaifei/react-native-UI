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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import BGIconAnimation from "../custom/BGIconAnimation";
import ZFBasePath from "./ZFBasePath";
import ZFButtom from "../../components/Buttom/ZFButtom";
import ZFTitleView from "../../components/TitleView/ZFTitleView";


export default class ZFBase extends Component {

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
                { title: '按钮', name: 'Button', color: 'pink', icon: 'ic_buttom' ,pushName:'buttomContrl'},
                { title: '进度条', name: 'Progress', color: 'orange', icon: 'ic_jdt' ,pushName:'progressContrl'},
                { title: '开关', name: 'Switch', color: 'purple', icon: 'ic_wenben' ,pushName:'switchContrl'},
                { title: '头像', name: 'Avatar', color: 'red', icon: 'ic_tx' ,pushName:'buttomContrl'},
                { title: '标签', name: 'Tag', color: 'brown', icon: 'ic_tag' ,pushName:'buttomContrl'},
                { title: '加载', name: 'Loading', color: 'green', icon: 'ic_loadding' ,pushName:'buttomContrl'},
                { title: '布局', name: 'Layout', color: 'cyan', icon: 'ic_layout' ,pushName:'buttomContrl'},
                { title: '图标 ', name: 'Icon', color: 'midnightblue', icon: 'ic_tubiao' ,pushName:'buttomContrl'},
                { title: '背景', name: 'Background', color: 'blue', icon: 'ic_beijing' ,pushName:'buttomContrl'},
                { title: '边框阴影', name: 'Shadow', color: 'olive', icon: 'ic_bk' ,pushName:'buttomContrl'},
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

                {/*<BGIconAnimation />*/}
                {/*<ZFBasePath />*/}
                {/*<ZFButtom onPress={()=>{*/}
                    {/*// this.titleView.startAnimation()*/}
                {/*}}/>*/}
                {/*<ZFTitleView ref={o=>this.titleView=o} />*/}

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