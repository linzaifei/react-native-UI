import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFSliderBar from "../../components/slider/ZFSliderBar";
import ZFButtom from "../../components/Buttom/ZFButtom";

import IconFont from '../../Icon/IconFont'
import ZFSliderCirle from "../../components/slider/ZFSliderCirle";
export default class ZFSliderContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    componentWillUnmount(){
        console.log('======销毁了')
    }
    constructor(props) {

        super(props);

        this.state={
         value:0.2,
        }
    }


    render() {
        console.log('我刷新了')
        return (
            <View style={cusStyle.container}>
                <ScrollView>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="滑动" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            flex:1,
                        }}>

                            <ZFSliderBar
                                value={this.state.value}
                                progressColor={'#9c26b0'}
                                sliderStyle={{
                                    marginTop:20
                                }}
                                tagStyle={{
                                    backgroundColor:'#6739b6'
                                }}
                                onValueChange={(value)=>{
                                    console.log('====='+value)

                                }}
                            />

                            <ZFSliderBar
                                progressColor={['#6739b6','#39b54a']}
                                sliderStyle={{
                                    marginTop:20
                                }}
                                onValueChange={(value)=>{
                                    console.log('====='+value)
                                }}
                                tagStyle={{
                                   backgroundColor:'#6739b6'
                                }}
                            >
                                <IconFont
                                    name="ic_beijing"
                                    color="#fff"
                                    size={12}
                                />
                            </ZFSliderBar>

                        </View>

                        <ZFSliderCirle />
                    </View>
                </ScrollView>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});