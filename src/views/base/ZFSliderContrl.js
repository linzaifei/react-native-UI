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
import ZFSliderBar from "../../components/slider/ZFSliderBar";
import ZFButtom from "../../components/Buttom/ZFButton";

import IconFont from '../../Icon/IconFont'
import ZFSliderCirle from "../../components/slider/ZFSliderCirle";
import ZFLineProgressView from "../../components/progress/ZFLineProgressView";

export default class ZFSliderContrl extends Component {

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: navigation.getParam('title', '按钮')
        }
    }

    componentWillUnmount() {
        console.log('======销毁了')
    }

    constructor(props) {

        super(props);

        this.state = {
            progress: 0,

        }
    }


    render() {
        // console.log('我刷新了')
        const {
            progress,
        } = this.state
        return (
            <SafeAreaView style={cusStyle.container}>
                <ZFTitleView title="滑动"/>
                {/*<ScrollView>*/}


                    <View style={{
                        padding: 10,
                        backgroundColor: '#fff',
                    }}>

                        <ZFSliderBar
                            value={progress}
                            progressColor={'#9c26b0'}
                            sliderStyle={{
                                marginTop: 20
                            }}
                            tagStyle={{
                                backgroundColor: '#6739b6'
                            }}
                            onValueChange={(value) => {
                                console.log('=====' + value)

                            }}
                        />

                        <ZFSliderBar
                            progressColor={['#6739b6', '#39b54a']}
                            sliderStyle={{
                                marginTop: 20
                            }}
                            onValueChange={(value) => {
                                console.log('=====' + value)
                                this.setState({
                                    progress: value
                                })
                            }}
                            tagStyle={{
                                backgroundColor: '#6739b6'
                            }}
                        >
                            <IconFont
                                name="ic_beijing"
                                color="#fff"
                                size={12}
                            />
                        </ZFSliderBar>

                        <ZFSliderBar
                            progressColor={['#6739b6', '#39b54a']}
                            showTag={false}
                            value={progress}
                            sliderStyle={{
                                marginTop: 20
                            }}
                        />

                    </View>
                {/*</ScrollView>*/}
            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});