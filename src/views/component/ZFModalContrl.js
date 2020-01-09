import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import ZFSwiperView from "../../components/swipeRow/ZFSwiperView";
import ZFSwipeRow from "../../components/swipeRow/ZFSwipeRow";
import ZFMessageItem from "../../viewconponent/message/ZFMessageItem";
import ZFAlertView from "../../components/alert_view/ZFAlertView";
import ZFButton from "../../components/Buttom/ZFButton";
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFUpdateAlertView from "../../components/alert_view/ZFUpdateAlertView";


export default class ZFModalContrl extends Component {

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: navigation.getParam('title', '按钮')
        }
    }

    constructor(props) {
        super(props);
        this.state={
            progress:0,
        }

    }


    setInterval(){

        let self = this;
        self.timer = setInterval(
            ()=>{
                self.state.progress = self.state.progress + 0.03;
                console.log('==========',self.state.progress)

                self.setState({
                    progress:self.state.progress,
                },()=>{
                    if(self.state.progress >=1){
                        clearTimeout(self.timer);
                        self.setState({
                            progress:0
                        })
                    }

                })

            },
            1000,
        )

    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }


    onClickItem(index){

        let self = this;

        let options = index==0?[{
            title:'取消',
        },{
            title:'确认',
        }]:[{
            title:'取消',
            color:'#fff',
            backgroundColor:'#8799a3'
        },{
            title:'确认',
            color:'#fff',
            backgroundColor:'#e54d42'
        }]
        switch (index){
            case 0:
            case 1:
                self.alertView.show({
                    title:'温馨提示',
                    content:'醉卧沙场君莫笑',
                    options:options,
                },function (ret) {

                })
                break;
            case 2:
                self.alertUpdateView.show({
                    title:'发现新版本v1.1.1',
                    content:'1.修复bug \n2.添加数',
                    options:[{
                        title:'更新',
                        color:'#fff',
                        backgroundColor:'#e54d42',
                        update:true,
                    }],
                },function (index,item) {
                    if(item.update){
                        self.setInterval()
                    }
                })

                break;
        }

    }


    render() {
        return (
            <SafeAreaView style={cusStyle.container}>


                <ZFTitleView title="自定义alert" />
                <ZFButton
                    title="弹出模态框"
                    btnStyle={{
                        marginTop:20,
                        backgroundColor:'#6739b6',
                        marginLeft:30,
                        marginRight:30,
                    }}
                    textStyle={{
                        color:'#fff'
                    }}
                    onPress={()=>{
                        this.onClickItem(0)
                    }}
                />

                <ZFTitleView title="自定义alert" />

                <ZFButton
                    title="弹出模态框样式一"
                    btnStyle={{
                        marginTop:20,
                        backgroundColor:'#39b54a',
                        marginLeft:30,
                        marginRight:30,
                    }}
                    textStyle={{
                        color:'#fff'
                    }}
                    onPress={()=>{
                        this.onClickItem(1)
                    }}
                />

                <ZFTitleView title="更新" />

                <ZFButton
                    title="更新"
                    btnStyle={{
                        marginTop:20,
                        backgroundColor:'#39b54a',
                        marginLeft:30,
                        marginRight:30,
                    }}
                    textStyle={{
                        color:'#fff'
                    }}
                    onPress={()=>{
                        this.onClickItem(2)
                    }}
                />


                <ZFAlertView ref={o=>this.alertView=o} />

                <ZFUpdateAlertView
                    ref={o=>this.alertUpdateView=o}
                    progress={this.state.progress}
                />

            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});