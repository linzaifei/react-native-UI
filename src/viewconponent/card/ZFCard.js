import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'
import ZFCardHeader from "./ZFCardHeader";
import IconFont from  '../../Icon/IconFont'
import ZFIconTag from "../../components/tag/ZFIconTag";
import ZFCommentCell from "./ZFCommentCell";

export default class ZFCard extends Component {
    static propTypes = {
        ...ZFCardHeader.propTypes,
        bgImage:PropTypes.string,/** 背景图片 */
        content:PropTypes.string,/** 背景字体 */
        carStyle:ViewPropTypes.style,
        zan:PropTypes.number,
        msg:PropTypes.number,
        look:PropTypes.number,

    }

    static defaultProps = {

        zan:0,
        msg:0,
        look:0,

    }
    constructor(props) {
        super(props);

        this.state={
            width:0,
        }

    }

    render() {
        const {
            bgImage,
            content,
            carStyle,
            look,
            zan,
            msg,
        }=this.props;
        const {
            width
        }=this.state;
        var image = typeof bgImage == 'string'?{uri:bgImage}:bgImage;
        return (
            <View  style={{
                ...styles.container,
                ...carStyle,
            }} onLayout={(e)=>{
                this.setState({
                    width:e.nativeEvent.layout.width,
                })
            }} >
                <ImageBackground source={image} style={{
                    width:width,
                    height:width*2/3,
                    borderRadius:5,
                }}>
                    <Text style={{
                        fontSize:14,
                        color:'#fff',
                        position:'absolute',
                        left:8,
                        bottom:8,
                    }}>{content}</Text>
                </ImageBackground>

                <View style={{
                    ...styles.layout,
                    justifyContent:'space-between',
                }}>
                    <ZFCardHeader
                        {...this.props}
                    />

                    <ZFCommentCell

                        list={[
                            {
                                name:'ic_look',
                                color:'#8799a3',
                                size:16,
                                textSize:11,
                                value:look,
                                textColor:'#8799a3',
                            },{
                                name:'ic_zan',
                                color:'#8799a3',
                                size:12,
                                textSize:11,
                                value:zan,
                                textColor:'#8799a3',
                            },{
                                name:'ic_xiaoxi',
                                color:'#8799a3',
                                size:12,
                                textSize:11,
                                value:msg,
                                textColor:'#8799a3',
                            }

                        ]}


                    />
                </View>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        margin:5,
        borderRadius:10,
        overflow:'hidden',
        backgroundColor:'#fff'
    },
    layout:{
        flexDirection:'row',
        alignItems:'flex-end',

    }
});