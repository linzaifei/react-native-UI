import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,


} from 'react-native';

import Proptypes from 'prop-types'

export default class ZFTitleView extends Component {

    static propTypes={
        style:ViewPropTypes.style,
        titleStyle:ViewPropTypes.style,
        tagColor:Proptypes.string,
        title:Proptypes.string,
        children:Proptypes.element,/**  */
        canTag:Proptypes.bool,/** 有没有标记 */
    }
    static defaultProps={
        canTag:false,
        tagColor:'#2b3643',
        canRefresh:false,
    }


    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('=========',nextProps)
        return (this.props.canTag != nextProps.canTag) ||this.props.children != nextProps.children
    }

    render() {
        console.log('========刷新-titleView')
        var self = this;
        const {
            titleStyle,
            title,
            children,
            canTag,
            style,
            tagColor,
        }=self.props;

        return (
            <View style={{
                ...styles.container,
                padding:10,
                ...style,
                justifyContent:'space-around',
            }}>
                <View style={{
                    ...styles.container,
                    flex:1
                }}>
                    <View style={[styles.tag,{backgroundColor:tagColor}]} />
                    <Text style={{
                        ...styles.titleStyle,
                        ...titleStyle,
                    }}>{title}</Text>
                    {
                        canTag?<Text style={{
                            color:'#e54d42',
                            marginLeft:2,
                        }}>*</Text>:null
                    }
                </View>
                {
                    children?<View style={{
                        flex:1,
                        ...styles.container,
                        justifyContent:'flex-end'
                    }}>
                        {children}
                    </View>:null
                }
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
    },
    titleStyle:{
        color:'#666',
        fontSize:15,
    },
    tag:{
        marginRight:5,
        width:6,
        height:15,
        borderRadius:3,
    }
});