import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import ZFStepper from "../../components/stepper/ZFStepper";
import ZFTitleView from "../../components/TitleView/ZFTitleView";


export default class ZFRNDemo extends Component {
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
            <View style={cusStyle.container}>
                <ScrollView>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="步进器手势" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFStepper type={'pan'} completed={(count)=>{
                                console.log('========'+count)
                            }}/>

                            <ZFStepper type={'pan'} count={10} completed={(count)=>{
                                console.log('========'+count)
                            }}/>
                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="步进器" />

                        <View style={{
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            ...cusStyle.layout_row,
                            justifyContent:'space-around'
                        }}>
                            <ZFStepper completed={(count)=>{
                                console.log('========'+count)
                            }}/>

                            <ZFStepper count={10} completed={(count)=>{
                                console.log('========'+count)
                            }}/>
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