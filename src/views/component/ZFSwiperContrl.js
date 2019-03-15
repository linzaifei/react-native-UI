import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ZFSwiper from "../../viewconponent/swiper/ZFSwiper";


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
        }

    }


    render() {
        return (
            <View>
                <ZFSwiper
                    style={styles.swiper}
                    onChange={(index)=> {

                    }}
                >
                    <View style={[styles.item,styles.one]}>
                        <Text>1</Text>
                    </View>
                    <View style={[styles.item,styles.two]}>
                        <Text>2</Text>
                    </View>
                    <View style={[styles.item,styles.three]}>
                        <Text>3</Text>
                    </View>

                </ZFSwiper>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    swiper: {
        alignSelf:'center',
        marginVertical: 100,
        borderWidth: 2,
        borderColor: 'red',
        overflow:'hidden',
        width: 100,
        height:100,
    },
    item : {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    one: {
        backgroundColor: '#e54d42',
    },
    two: {
        backgroundColor: '#f37b1d',
    },
    three: {
        backgroundColor: '#39b54a',
    },
});