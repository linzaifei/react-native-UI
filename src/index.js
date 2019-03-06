import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
} from 'react-native';
import IconFont from './Icon/IconFont'


/** 基础 */
import ZFBase from './views/base/ZFBase'
import ZFButtomContrl from './views/base/ZFButtomContrl'
import ZFProgressContrl from './views/base/ZFProgressContrl'
import ZFSwitchContrl from './views/base/ZFSwitchContrl'
import ZFSliderContrl from './views/base/ZFSliderContrl'
import ZFStepperContrl from './views/base/ZFStepperContrl'
import ZFCountdownContrl from './views/base/ZFCountdownContrl'
import ZFLoaddingContrl from './views/base/ZFLoaddingContrl'
import ZFHeaderContrl from './views/base/ZFHeaderContrl'
import ZFTagContrl from './views/base/ZFTagContrl'



/** 项目组件 */
import ZFComponent from './views/component/ZFComponent'
import ZFInputContrl from './views/component/ZFInputContrl'
import ZFListContrl from './views/component/ZFListContrl'
import ZFCardContrl from './views/component/ZFCardContrl'

import ZFExpand from './views/expand/ZFExpand'
import ZFAbout from './views/about/ZFAbout'






import {createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation'



const TabOptions = (tabBarTitle,normalImage,selectedImage) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            <IconFont
             name={focused ?normalImage:selectedImage}
             size={30}
             color={tintColor}
            />
        )
    });
    return {tabBarLabel,tabBarIcon};
};


const IndexStack= createBottomTabNavigator({
    Base:{
        screen:createStackNavigator({
            ZFBase
        }),
        navigationOptions:()=> TabOptions("基础",'ic_tabbar_progress_sel','ic_tabbar_progress'),
    },
    Comp:{
        screen:createStackNavigator({
            ZFComponent
        }),
        navigationOptions:()=> TabOptions("组件",'ic_tabbar_component_sel','ic_tabbar_component'),
    },
    Expand:{
        screen:createStackNavigator({
            ZFExpand
        }),
        navigationOptions:()=> TabOptions("扩展",'ic_tabbar_zy_sel','ic_tabbar_zy'),
    },
    About:{
        screen:createStackNavigator({
            ZFAbout
        }),
        navigationOptions:()=> TabOptions("关于",'ic_tabbar_about_sel','ic_tabbar_about'),
    },
},{
    tabBarOptions:{
        activeTintColor:defaultColor,
        inactiveTintColor:smColor,
        labelStyle: {
            fontSize: 10,
            marginBottom: 2,
        },
        showIcon:true,
        indicatorStyle :{
            height:0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
        }
    },
    style:{
        backgroundColor:'white'
    },
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    backBehavior:'none',
    headerMode: 'none',
})

const subStack=createStackNavigator({
    tabar:{screen:IndexStack},
    buttomContrl:{
        screen:ZFButtomContrl,
    },
    progressContrl:{
        screen:ZFProgressContrl,
    },
    switchContrl:{
        screen:ZFSwitchContrl,
    },
    sliderContrl:{
        screen:ZFSliderContrl,
    },
    countdownContrl:{
        screen:ZFCountdownContrl,
    },
    stepperContrl:{
        screen:ZFStepperContrl,
    },
    loaddingContrl:{
        screen:ZFLoaddingContrl,
    },
    headerContrl:{
        screen:ZFHeaderContrl,
    },
    tagContrl:{
        screen:ZFTagContrl,
    },

    /** 项目组件 */
    inputContrl:{
        screen:ZFInputContrl,
    },
    listContrl:{
        screen:ZFListContrl,
    },
    cardContrl:{
        screen:ZFCardContrl,
    },



})


IndexStack.navigationOptions = {
    header: null,
};



const RootStack = createAppContainer(subStack)

export default class index extends Component{
    render(){
        return <RootStack />
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 28,
        height:Platform.OS === 'ios' ? 30 : 28,
    },
})