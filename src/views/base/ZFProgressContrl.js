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
import IconFont from '../../Icon/IconFont'

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

    componentWillUnmount(){
        console.log('======销毁了')
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
                           <ZFAnimationProgress showProgress={true} progress={0.8} strokeCap="butt"  />
                           <ZFAnimationProgress showProgress={true} progress={0.4} progressStyle={{marginTop:5}}  progressColor="#f37b1d" />

                       </View>
                   </View>

                   <View style={{
                       marginTop:10
                   }}>
                       <ZFTitleView title="进度条尺寸" />

                       <View style={{
                           padding:10,
                           backgroundColor:'#fff',
                           marginTop:1,
                       }}>
                           <ZFAnimationProgress progress={0.5} strokeCap="butt"  />
                           <ZFAnimationProgress strokeWidth={11} progress={0.7} progressStyle={{marginTop:5}}  progressColor={['#f37b1d','#6739b6']} />
                           <ZFAnimationProgress strokeWidth={8} progress={0.4} progressStyle={{marginTop:5}}  progressColor="#6739b6" />
                       </View>
                   </View>

                   <View style={{
                       marginTop:10,

                   }}>
                       <ZFTitleView title="进度条布局" />

                       <View style={{
                           padding:10,
                           backgroundColor:'#fff',
                           marginTop:1,
                       }}>
                           <ZFAnimationProgress progressStyle={{
                               marginTop:2,
                           }}  progress={0.7}showProgress={true} strokeWidth={10} rightView={
                               <IconFont
                                   name={'ic_layout'}
                                   size={20}
                                   color='#e54d42'
                               />
                           }  />

                           <ZFAnimationProgress progressStyle={{
                               marginTop:2,
                           }}  progress={0.5} strokeWidth={10} rightView={
                               <Text style={styles.textStyle}>{'50%'}</Text>
                           }  />

                           <ZFAnimationProgress progressStyle={{
                               marginTop:2,
                           }} progressColor="#f37b1d"  progress={0.5} strokeWidth={10} leftView={
                               <Text style={styles.textStyle}>{'50%'}</Text>
                           }  />

                           <ZFAnimationProgress progressStyle={{
                               marginTop:2,
                           }} progressColor="#6739b6"  progress={0.8} strokeWidth={10} leftView={
                               <IconFont
                                   name={'ic_beijing'}
                                   size={20}
                                   color='#6739b6'
                               />
                           }  />

                       </View>

                   </View>

                   <View style={{
                       marginTop:10
                   }}>
                       <ZFTitleView title="圆型进度条" />

                       <View style={{
                           padding:10,
                           backgroundColor:'#fff',
                           marginTop:1,
                           ...cusStyle.layout_row
                       }}>
                           <ZFAnimationProgress type={'circle'} progress={0.8}   />
                           <ZFAnimationProgress progressColor="#6739b6" radius={30} type={'circle'} showProgress={true} progress={0.3}  />
                           <ZFAnimationProgress progressColor="#f37b1d" radius={40} strokeWidth={7} type={'circle'} showProgress={true} progress={0.5}  />
                       </View>
                   </View>

                   <View style={{
                       marginTop:10
                   }}>
                       <ZFTitleView title="圆型进度条布局" />

                       <View style={{
                           padding:10,
                           backgroundColor:'#fff',
                           marginTop:1,
                           ...cusStyle.layout_row
                       }}>
                           <ZFAnimationProgress showProgress={true} type={'circle'} progress={0.8}  >
                               <IconFont
                                   name={'ic_layout'}
                                   size={40}
                                   color='#e54d42'
                               />
                           </ZFAnimationProgress>

                           <ZFAnimationProgress progressColor="#6739b6" radius={40} type={'circle'}  strokeWidth={5} showProgress={true} progress={0.3}  >
                               <View style={{
                                   flexDirection:'row',
                                   alignItems:'center'
                               }}>
                                   <IconFont
                                       name={'ic_beijing'}
                                       size={20}
                                       color='#6739b6'
                                   />
                                   <Text style={{
                                       color:'#6739b6',
                                       fontSize:10,
                                   }}>自定义</Text>
                               </View>
                           </ZFAnimationProgress>

                           <ZFAnimationProgress showProgress={true} type={'circle'} progress={0.6} rightView={
                               <Text style={{
                                   color:'#6739b6',
                                   fontSize:14,
                               }}>右视图</Text>
                           } />


                       </View>
                   </View>


                   <View style={{
                       marginTop:10
                   }}>
                       <ZFTitleView title="扇形型进度条" />

                       <View style={{
                           padding:10,
                           backgroundColor:'#fff',
                           marginTop:1,
                           ...cusStyle.layout_row
                       }}>
                           <ZFAnimationProgress type={'sector'}  showProgress={true} progress={0.8}   />
                           <ZFAnimationProgress type={'sector'}   progressColor="#6739b6" radius={30}  progress={0.6}   />
                           <ZFAnimationProgress  type={'sector'} progressColor="#f37b1d" radius={40}   progress={0.4}   />

                       </View>
                   </View>

                   {/*<View style={{*/}
                       {/*marginTop:10*/}
                   {/*}}>*/}
                       {/*<ZFTitleView title="波浪形进度条" />*/}

                       {/*<View style={{*/}
                           {/*padding:10,*/}
                           {/*backgroundColor:'#fff',*/}
                           {/*marginTop:1,*/}
                           {/*...cusStyle.layout_row*/}
                       {/*}}>*/}
                           {/*<ZFAnimationProgress type={'wave'}  showProgress={true} progress={0.8}   />*/}
                       {/*</View>*/}
                   {/*</View>*/}

               </ScrollView>
           </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    textStyle:{
        fontSize:13,
        color:'#f37b1d',
        marginLeft:5,
    }
});