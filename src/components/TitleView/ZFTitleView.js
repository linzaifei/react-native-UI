import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    Animated,
    LayoutAnimation,
    Platform,
    UIManager,

} from 'react-native';

import Proptypes from 'prop-types'

export default class ZFTitleView extends Component {

    static propTypes={
        title:Proptypes.string,
        backgroundColor:Proptypes.string,
        textStyle:ViewPropTypes.style,
        children:Proptypes.element,/**  */
    }
    static defaultProps={
        backgroundColor:defaultColor
    }

    constructor(props){
        super(props)
        this.state={

        }

    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('=========nextState'+JSON.stringify(nextState))
        return false;
    }

    render() {
        console.log('ZFTitleView========刷新')
        var self = this;
        const {
            textStyle,
            title,
            backgroundColor,
            children,
        }=self.props;

        return (
            <View style={{
                ...styles.container,
                padding:10,
                backgroundColor:'#fff',
                justifyContent:'space-around'
            }}>
                <View style={styles.container}>
                    <View style={[styles.tag,{backgroundColor}]} />
                    <Text style={{
                        ...styles.textStyle,
                        ...textStyle,
                    }}>{title}</Text>
                </View>
                <View style={{
                    flex:1,
                    ...styles.container,
                    justifyContent:'flex-end'
                }}>
                    {children}
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    textStyle:{
        color:'#666',

    },
    tag:{
        marginRight:5,
        width:6,
        height:15,
        borderRadius:3,
    }
});