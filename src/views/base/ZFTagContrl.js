import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import ZFTag from "../../components/tag/ZFTag";
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import IconFont from '../../Icon/IconFont'
import ZFCapsule from "../../components/tag/ZFCapsule";

export default class ZFTagContrl extends Component {

    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {

        super(props);


    }


    render() {
        return (
            <View style={{
                ...cusStyle.container
            }}>
                <ScrollView>

                    <View>
                        <ZFTitleView title="标签样式" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            justifyContent:'space-around'
                        }}>
                            <ZFTag uri={'https://image.weilanwl.com/img/square-1.jpg'} textStyle={{
                                fontSize:14,
                                color:'#39b54a'
                            }}  text="小猫" />
                            <ZFTag uri={require('../../images/ic_tab_home.png')} direction={'right'} text="小猫" imgStyle={{
                                width:45,
                                height:45
                            }} />
                            <ZFTag uri={'https://image.weilanwl.com/img/square-1.jpg'} direction={'top'} text="小猫" />
                            <ZFTag uri={'https://image.weilanwl.com/img/square-1.jpg'} direction={'bottom'} text="小猫" />
                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="自定义标签样式" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            justifyContent:'space-around'
                        }}>
                            <ZFTag  textStyle={{
                                fontSize:14,
                                color:'#6739b6'
                            }}  text="色彩斑" rightBottomView={
                                <IconFont
                                name={'ic_beijing'}
                                size={30}
                                color='#6739b6'
                            />} />

                            <ZFTag  textStyle={{
                                fontSize:14,
                                color:'#1cbbb4'
                            }} direction={'right'}  text="样式二" rightBottomView={
                                <IconFont
                                    name={'ic_layout'}
                                    size={30}
                                    color='#1cbbb4'
                                />} />

                            <ZFTag direction={'top'} leftTopView={
                                <IconFont
                                    name={'ic_layout'}
                                    size={30}
                                    color='#1cbbb4'
                                />
                            }  text="色彩斑" rightBottomView={
                                <IconFont
                                    name={'ic_beijing'}
                                    size={30}
                                    color='#6739b6'
                                />} />

                            <ZFTag direction={'top'}  text="色彩斑" rightBottomView={
                                <Text style={{
                                color:'#6739b6',
                                    fontSize:14,
                                    marginTop:8
                                }}>样式三</Text>
                                } />

                        </View>
                    </View>


                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="标签边框" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            justifyContent:'space-around'
                        }}>

                            <ZFTag  textStyle={{
                                fontSize:12,
                                color:'#6739b6'
                            }}  text="色彩斑" rightBottomView={
                                <IconFont
                                    name={'ic_beijing'}
                                    size={20}
                                    color='#6739b6'
                                />}
                                    boxStyle={{
                                        borderRadius:30,
                                        borderWidth:1,
                                        borderColor:'#6739b6',
                                        paddingLeft:10,
                                        paddingRight:10,

                                    }}
                            />

                            <ZFTag  textStyle={{
                                fontSize:12,
                                color:'#1cbbb4'
                            }}  text="色彩斑" direction={'right'} rightBottomView={
                                <IconFont
                                    name={'ic_layout'}
                                    size={20}
                                    color='#1cbbb4'
                                />}
                                    boxStyle={{
                                        borderRadius:30,
                                        borderWidth:1,
                                        borderColor:'#1cbbb4',
                                        paddingLeft:10,
                                        paddingRight:10,

                                    }}
                            />


                        </View>
                    </View>

                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="标签边框" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            justifyContent:'space-around'
                        }}>


                            <ZFCapsule
                                leftValue="说明"
                                rightValue="12"
                                width={80}

                            />
                            <ZFCapsule
                                leftValue="+86"
                                rightValue="123456"
                                cap={'round'}
                                width={120}
                            />


                        </View>
                    </View>
                    <View style={{
                        marginTop:10
                    }}>
                        <ZFTitleView title="标签边框" />

                        <View style={{
                            ...cusStyle.layout_row,
                            padding:10,
                            backgroundColor:'#fff',
                            marginTop:1,
                            justifyContent:'space-around'
                        }}>


                            <ZFCapsule
                                name="ic_store"
                                rightValue="12"
                                size={13}
                                color="#e54d42"
                                type={'icon'}
                                width={80}
                            />
                            <ZFCapsule
                                name="ic_store"
                                rightValue="12"
                                size={13}
                                type={'icon'}
                                cap={'round'}
                                width={80}
                            />


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