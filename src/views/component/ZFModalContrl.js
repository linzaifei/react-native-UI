import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import ZFSwiperView from "../../components/swipeRow/ZFSwiperView";
import ZFSwipeRow from "../../components/swipeRow/ZFSwipeRow";
import ZFMessageItem from "../../viewconponent/message/ZFMessageItem";


export default class ZFModalContrl extends Component {

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
            <SafeAreaView style={cusStyle.container}>
               {/*<View>*/}
                   {/*<ZFSwiperView>*/}

                <ZFMessageItem
                    image={'http://sowcar.com/t6/690/1553670017x2890191853.jpg'}
                    title="小林子"
                    titleType={'group'}
                    titleTag="6人"
                    time="22.22"
                    messageType={'no-message'}
                    message={3}
                />
                {/*<ScrollView>*/}

                    <ZFSwipeRow list={[
                        {
                            value:'删除',
                            backgroundColor:'red',
                        }
                    ]}  >
                        <ZFMessageItem
                            image={'http://sowcar.com/t6/690/1553670017x2890191853.jpg'}
                            title="小林子"
                            titleType={'group'}
                            titleTag="6人"
                            time="22.22"
                            messageType={'no-message'}
                            message={3}
                        />
                    </ZFSwipeRow>

                {/*</ScrollView>*/}



                   {/*</ZFSwiperView>*/}
               {/*</View>*/}
            </SafeAreaView>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});