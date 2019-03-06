import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'
export default class ZFMessage extends Component {
    static propTypes = {
        image:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),/** 图片 */
        boxStyle:ViewPropTypes.style,/**  */
        imgStyle:ViewPropTypes.style,/** 图片样式 */
        titleStyle:ViewPropTypes.style,/** 图片样式 */
        title:PropTypes.string,/** 标题 */
        time:PropTypes.string,/** 时间 */
        titleView:PropTypes.element,/** 标题试图 */
        detailView:PropTypes.element,/** 标题试图 */
        messageView:PropTypes.element,/** 消息试图 */
    }
    static defaultProps = {

    }
    constructor(props) {
        super(props);


    }

    render() {
        const {
            image,
            imgStyle,
            titleView,
            titleStyle,
            title,
            detailView,
            time,
            messageView,
            boxStyle
        }=this.props;

        var img = typeof image == 'string'?{uri:image}:image;
        return (
            <View style={{
                ...styles.container,
                padding:10,
                backgroundColor:'#fff',
                ...boxStyle,
                justifyContent:'space-between',

            }}>
                <View style={{
                    ...styles.container,
                }}>
                    <Image source={img} style={{
                        ...styles.imgStyle,
                        ...imgStyle,
                    }} />

                    <View style={{
                        marginLeft:10,
                        height:(imgStyle&&imgStyle.height)?imgStyle.height:styles.imgStyle.height,
                        justifyContent:'space-between'
                    }}>
                        <View style={{
                            ...styles.container,
                        }}>
                            <Text style={{
                                ...styles.titleStyle,
                                ...titleStyle,
                            }}>{title}</Text>
                            {titleView}
                        </View>
                        {detailView}
                    </View>
                </View>

                <View style={{
                    justifyContent:'space-between',
                    alignItems:'center',
                    height:(imgStyle&&imgStyle.height)?imgStyle.height:styles.imgStyle.height,
                }}>
                    <Text style={{
                        ...styles.timeStyle,
                    }}>{time}</Text>
                    {messageView}
                </View>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center'
    },
    imgStyle:{
        width:55,
        height:55,
        borderRadius:5,
    },
    titleStyle:{
        color:'#666',
        fontSize:14,
    },
    timeStyle:{
        fontSize:12,
        color:'#666'
    }
});