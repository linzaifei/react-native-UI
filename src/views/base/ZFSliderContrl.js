import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFSlider from "../../components/slider/ZFSlider";


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
         x:10,
         y:10
        }
    }


    render() {
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
                        }}>

                            <ZFSlider y={this.state.y} x={this.state.x} update={(x,y)=>{
                                this.setState({
                                    x,
                                    y,
                                })
                            }} />

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});