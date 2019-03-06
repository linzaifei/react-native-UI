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
export default class ZFCardHeader extends Component {

    static propTypes = {
        image:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),/** 图片 */
        cardHeaderStyle:ViewPropTypes.style,/**  */
        imgStyle:ViewPropTypes.style,/** 图片样式 */

        titleStyle:ViewPropTypes.style,/** 图片样式 */
        detailStyle:ViewPropTypes.style,/** 图片样式 */
        title:PropTypes.string,/** 标题 */
        detail:PropTypes.string,/** 时间 */
        titleView:PropTypes.element,/** 标题试图 */
        detailView:PropTypes.element,/** 标题试图 */
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
            cardHeaderStyle,
            detailStyle,
            detail,
        }=this.props;

        var img = typeof image == 'string'?{uri:image}:image;

        return (
            <View style={{
                ...styles.container,
                ...cardHeaderStyle,
            }}>
                <Image source={img} style={{
                    ...styles.imgStyle,
                    ...imgStyle,
                }} />

                <View style={{
                    marginLeft:10,
                    height:(imgStyle&&imgStyle.height)?imgStyle.height:styles.imgStyle.height,
                    justifyContent:'space-around'
                }}>

                    {
                        titleView?titleView:
                            <Text style={{
                                ...styles.titleStyle,
                                ...titleStyle,
                            }}>{title}</Text>
                    }
                    {
                        detailView?detailView:
                            <Text style={{
                                ...styles.detailStyle,
                                ...detailStyle,
                            }}>{detail}</Text>
                    }
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
        color:'#333',
        fontSize:15,
    },
    detailStyle:{
        color:'#666',
        fontSize:13,
    }
});