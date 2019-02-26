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



    render() {
        // console.log('========')
        var self = this;
        const {
            textStyle,
            title,
            backgroundColor,
        }=self.props;

        return (
            <View style={{
                ...styles.container,
                padding:10,
                backgroundColor:'#fff'
            }}>
                <View style={styles.container}>
                    <View style={[styles.tag,{backgroundColor}]}>

                    </View>
                    <Text style={{
                        ...styles.textStyle,
                        ...textStyle,
                    }}>{title}</Text>
                </View>


            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',

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