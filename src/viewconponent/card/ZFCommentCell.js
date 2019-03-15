import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    TouchableWithoutFeedback,
} from 'react-native';
import ZFIconTag from "../../components/tag/ZFIconTag";

import PropTypes from 'prop-types'
export default class ZFCommentCell extends Component {

    static propTypes = {
        list:PropTypes.array,/** 背景图片 */
        direction: PropTypes.oneOf(['left','right','top','bottom']),/** 开关状态 */
        subStyle:ViewPropTypes.style,
        textStyle:ViewPropTypes.style,
        onClickItem:PropTypes.func,
    }

    static defaultProps = {
        direction:'right',

    }

    constructor(props) {
        super(props);

    }


    getItem(){
        const {
            list,
            direction,
            subStyle,
            textStyle,
            onClickItem,
        }=this.props;

        var arr = []
        list.map((item,index)=>{
            arr.push(
                <TouchableWithoutFeedback onPress={()=>{
                    onClickItem&&onClickItem(index)
                }} key={index}>
                    <View  style={{
                        ...subStyle,
                    }}>
                        <ZFIconTag
                            direction={direction}
                            color={item.color}
                            name={item.name}
                            size={item.size}
                            text={item.value.toString()}
                            textStyle={{
                                fontSize:item.textSize,
                                color:item.textColor,
                                ...textStyle,
                            }}
                            boxStyle={{
                                backgroundColor:'transparent'
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
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