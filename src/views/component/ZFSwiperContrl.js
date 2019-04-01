import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import ZFSwiper from "../../components/swiper/ZFSwiper";
import ZFTitleView from "../../components/TitleView/ZFTitleView";
import ZFIconTag from "../../components/tag/ZFIconTag";



export default class ZFSwiperContrl extends Component {
    static navigationOptions=({navigation})=>{
        const params = navigation.state.params || {};
        return{
            title:navigation.getParam('title','按钮')
        }
    }

    constructor(props) {

        super(props);

        this.state={
            index: 0,
            list:[
                'http://sowcar.com/t6/690/1553669958x2890191853.jpg',
                'http://sowcar.com/t6/690/1553669975x2890191853.jpg',
                'http://sowcar.com/t6/690/1553669931x1965165878.jpg',
            ],
        }

    }


    _getItems(){
        var list = [];
        this.state.list.map((item,index)=>{
            list.push(
                <Image key={index} source={{uri:item}} style={{width:280,height:160}}/>
            )
        })
        return list;
    }

    _getGBItems(){
        var list = [];
        var arr = ['浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船','举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月','忽闻水上琵琶声，主人忘归客不发'];
        arr.map((item,index)=>{
            list.push(
               <ZFIconTag
                   key={index}
                name="ic_guangbo"
                color="#e54d42"
                size={25}
                text={item}
                   textStyle={{
                       // color:'red',
                   }}
                   boxStyle={{
                       width:380
                   }}

               />
            )
        })
        return list;
    }

    render() {
        return (
            <SafeAreaView style={cusStyle.container}>
                <ScrollView>
                    <View>
                        <ZFTitleView title="轮播图水平样式" />
                        <ZFSwiper
                            style={styles.swiper}
                            autoPlay={true}
                            defaultIndex={0}
                            onPress={(index)=>{
                                alert(index)
                            }}
                            onChangeEnd={(index)=>{
                                console.log('结束======'+index)
                            }}
                            onChangeStart={(index)=>{
                                console.log('开始======'+index)
                            }}
                        >
                            {this._getItems()}
                        </ZFSwiper>
                    </View>

                    <View>
                        <ZFTitleView title="轮播图垂直样式" />
                        <ZFSwiper
                            style={styles.swiper}
                            autoPlay={true}
                            direction={'vertical'}
                            defaultIndex={1}
                            onPress={(index)=>{
                                alert(index)
                            }}
                            onChangeEnd={(index)=>{
                                console.log('结束======'+index)
                            }}
                            onChangeStart={(index)=>{
                                console.log('开始======'+index)
                            }}
                        >
                            {this._getItems()}
                        </ZFSwiper>
                    </View>

                    <View>
                        <ZFTitleView title="轮播图广播" />
                           <ZFSwiper
                               style={styles.item}
                               autoPlay={true}
                               direction={'vertical'}
                               onPress={(index)=>{
                                   alert(index)
                               }}
                           >
                               {this._getGBItems()}
                           </ZFSwiper>
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    swiper: {
        alignSelf:'center',
        height:160,
        width:280,
    },
    item:{
        // alignSelf:'center',
        height:35,
        width:380,
    }
});