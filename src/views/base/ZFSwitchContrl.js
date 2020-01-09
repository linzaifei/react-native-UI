import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView
} from 'react-native';
import ZFSwitch from "../../components/switch/ZFSwitch";
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import IconFont from '../../Icon/IconFont'
import ZFAnimSwitch from "../../components/switch/ZFAnimSwitch";

export default class ZFSwitchContrl extends Component {
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: navigation.getParam('title', '按钮')
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
        }
    }

    componentWillUnmount() {
        console.log('======销毁了')
    }

    render() {

        console.log('======刷新了')

        let self = this;
        return (
            <SafeAreaView style={cusStyle.container}>
                <ScrollView>

                    <ZFTitleView title="开关形状"/>

                    <View style={{
                        ...cusStyle.layout_row,
                        ...styles.switchStyle,
                    }}>

                        <ZFSwitch
                            isOn={false}
                            type={'butt'}
                            size={'medium'}
                            onToggle={(isOn) => {

                            }}
                        />

                        <ZFSwitch
                            isOn={false}
                            size={'medium'}
                            onToggle={(isOn) => {
                                alert('small' + ' ' + isOn)
                            }}
                        />

                        <ZFAnimSwitch
                            isOn={true}
                            onToggle={(isOn) => {
                                alert('选择' + ' ' + isOn)
                            }}
                        />

                    </View>


                    <ZFTitleView title="开关大小"/>

                    <View style={{
                        ...cusStyle.layout_row,
                        ...styles.switchStyle,
                    }}>
                        <ZFSwitch isOn={true} size={'small'} onColor="#0081ff" onToggle={(isOn) => {

                        }}/>
                        <ZFSwitch isOn={true} type={'butt'} size={'small'} onToggle={(isOn) => {

                        }}/>

                        <ZFSwitch isOn={true} size={'large'} onColor="#8dc63f" onToggle={(isOn) => {
                            alert('small' + ' ' + isOn)
                        }}/>

                    </View>


                    <ZFTitleView title="开关中间自定义"/>

                    <View style={{
                        ...cusStyle.layout_row,
                        ...styles.switchStyle,
                    }}>
                        <ZFSwitch
                            isOn={false}
                            size={'medium'}
                            tagEelement={
                                <IconFont
                                    name={'ic_beijing'}
                                    size={20}
                                    color='#6739b6'
                                />
                            }
                        />

                        <ZFSwitch
                            isOn={false}
                            type={'butt'}
                            size={'medium'}
                            onToggle={(isOn) => {

                            }}
                            tagEelement={
                                <Text style={{
                                    fontSize: 12,
                                    color: '#6739b6'
                                }}>{this.state.isOn ? '开' : '关'}</Text>
                            }/>
                    </View>


                    <ZFTitleView title="开关自定义渐变色样式"/>

                    <View style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        marginTop: 1,
                        ...cusStyle.layout_row,
                        justifyContent: 'space-around'
                    }}>
                        <ZFAnimSwitch
                            isOn={false}
                            size={'large'}
                            onColors={['#f37b1d', '#e54d42']}
                        />
                        <ZFAnimSwitch
                            isOn={true}
                            size={'small'}
                            onColors={['red', '#e54d42']}
                        />

                    </View>

                    <ZFTitleView title="开关自定义样式"/>

                    <View style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        marginTop: 1,
                        ...cusStyle.layout_row,
                        justifyContent: 'space-around'
                    }}>
                        <ZFAnimSwitch
                            isOn={false}
                            size={'large'}
                            leftView={
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 13,
                                }}>开</Text>
                            }
                            rightView={
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 13,
                                }}>关</Text>
                            }
                        />
                        <ZFAnimSwitch
                            isOn={true}
                            eftView={
                                <IconFont
                                    name={'ic_beijing'}
                                    size={18}
                                    color='#fff'
                                />
                            }
                            rightView={
                                <IconFont
                                    name={'ic_layout'}
                                    size={18}
                                    color='#fff'
                                />
                            }/>
                    </View>


                </ScrollView>

            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    switchStyle: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 1,
        justifyContent: 'space-around'
    }
});