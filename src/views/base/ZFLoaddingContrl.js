import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFLoaddingCircle from "../../components/loadding/ZFLoaddingCircle";
import ZFLoaddingBar from "../../components/loadding/ZFLoaddingBar";


export default class ZFLoaddingContrl extends Component {

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
                        <ZFTitleView title="加载样式一" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFLoaddingCircle showProgress={true} angle={300} radius={40} strokeWidth={4} />
                            <ZFLoaddingCircle angle={300} radius={30} progressColor={'#8dc63f'} strokeWidth={4} />
                            <ZFLoaddingCircle angle={90} radius={35} progressColor={'#6739b6'}  />
                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="加载样式二" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFLoaddingCircle type={'sector'} radius={40} />
                            <ZFLoaddingCircle  type={'sector'}angle={200} radius={30} progressColor={'#8dc63f'}  />
                            <ZFLoaddingCircle type={'sector'} angle={90} radius={35} progressColor={'#6739b6'}  />
                        </View>
                    </View>


                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="加载样式" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                        }}>

                            <ZFLoaddingBar progressColor= {['#8dc63f','#6739b6']} strokeCap={'butt'} />

                            <ZFLoaddingBar progressStyle={{
                                marginTop:10
                            }} progressColor= {'#8dc63f'} strokeWidth={8} />

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