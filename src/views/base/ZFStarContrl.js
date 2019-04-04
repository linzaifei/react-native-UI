import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import ZFStar from "../../components/star/ZFStar";
import ZFTitleView from "../../components/TitleView/ZFTitleView";


export default class ZFStarContrl extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <SafeAreaView style={cusStyle.container}>

                <ScrollView>
                    <ZFTitleView title="评分样式" />
                    <ZFStar
                        scale={0.6}
                        sum={6}
                        onClickItem={(index)=>{
                            console.log('==='+index)
                        }}
                    />

                    <ZFStar
                        type={'smile'}
                        defaultIndex={3}
                        scale={0.7}
                        onClickItem={(index)=>{
                            console.log('==='+index)
                        }}
                    />

                    <View style={{marginTop:20}}>
                        <ZFTitleView title="评分颜色" />
                        <ZFStar
                            scale={0.7}
                            activeColor='#6739b6'
                            defaultColor="#8799a3"
                            defaultIndex={5}
                            sum={7}
                            onClickItem={(index)=>{
                                console.log('==='+index)
                            }}
                        />

                        <ZFStar
                            type={'smile'}
                            defaultIndex={3}
                            activeColor='#9c26b0'
                            defaultColor="#8799a3"
                            scale={0.7}
                            sum={8}
                            onClickItem={(index)=>{
                                console.log('==='+index)
                            }}
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <ZFTitleView title="评分禁止" />
                        <ZFStar
                            scale={0.8}
                            activeColor='#6739b6'
                            defaultColor="#8799a3"
                            disabled={true}
                            defaultIndex={4}
                            onClickItem={(index)=>{
                                console.log('==='+index)
                            }}
                        />
                        <ZFStar
                            type={'smile'}
                            scale={0.8}
                            activeColor='#e54d42'
                            defaultColor="#8799a3"
                            disabled={true}
                            defaultIndex={3}
                            onClickItem={(index)=>{
                                console.log('==='+index)
                            }}
                        />

                    </View>

                </ScrollView>


            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});