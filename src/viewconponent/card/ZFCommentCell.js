import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ZFIconTag from "../../components/tag/ZFIconTag";

import PropTypes from 'prop-types'
export default class ZFCommentCell extends Component {

    static propTypes = {

        list:PropTypes.array,/** 背景图片 */
    }

    constructor(props) {
        super(props);

    }


    getItem(){
        const {
            list
        }=this.props;

        var arr = []
        list.map((item,index)=>{
            arr.push(
                <ZFIconTag
                    key={index}
                    iconColor={item.color}
                    iconName={item.name}
                    iconSize={item.size}
                    text={item.value.toString()}
                    textStyle={{
                        fontSize:item.textSize,
                        color:item.textColor
                    }}
                />
            )
        })
        return arr
    }

    render() {
        return (
            <View style={{
                ...styles.container,
            }}>
                {this.getItem()}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flexDirection:'row',
    }
});