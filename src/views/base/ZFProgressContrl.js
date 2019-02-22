import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import ZFAnimationProgress from "../../components/progress/ZFAnimationProgress";
import ZFLineProgressView from "../../components/progress/ZFLineProgressView";
import ZFTitleView from "../../components/TitleView/ZFTitleView";


export default class ZFProgressContrl extends Component {
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
           <View style={cusStyle.container}>
               <ScrollView>

                   <View>
                       <ZFTitleView title="进度条形状" />

                       <View style={{
                           padding:10,
                           backgroundColor:'#fff',
                           marginTop:1,
                       }}>

                           <ZFAnimationProgress progress={0.8} strokeCap="butt"  />
                           <ZFAnimationProgress progress={0.4} progressStyle={{marginTop:5}}  progressColor="#f37b1d" />

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