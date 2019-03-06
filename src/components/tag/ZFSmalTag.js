import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';
import Proptypes from 'prop-types'

export default class ZFSmalTag extends Component {

    static propTypes={
        type:Proptypes.oneOf('default','tag'),/** 标签样式 */
        value:Proptypes.string,
        tagStyle:ViewPropTypes.style,
        textStyle:ViewPropTypes.style,
    }

    static defaultProps={
        type:'default'
    }

    constructor(props) {
        super(props);
        this.state={

        }
    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){

        return false
    }



    render() {

        const {
            value,
            tagStyle,
            textStyle,
            type,
        }=this.props;
        if(type=='default'){
            return (
                <View style={{
                    backgroundColor:'red',
                    width:9,
                    height:9,
                    borderRadius:12,
                    zIndex:100,
                    ...tagStyle,
                }}></View>
            );
        }else {
            return (
                <View style={{
                    backgroundColor:'red',
                    borderRadius:8,
                    zIndex:100,
                    paddingLeft:3,
                    paddingRight:3,
                    paddingTop:1,
                    paddingBottom:1,
                    ...tagStyle,
                }}>
                    <Text style={{
                        fontSize:10,
                        color:'#fff',
                        ...textStyle,
                        textAlign:'center',
                    }}>{value}</Text>
                </View>
            );
        }
    }

}

var styles = StyleSheet.create({
    container: {}
});