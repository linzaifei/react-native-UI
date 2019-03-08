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
import ZFSmalTag from "../../components/tag/ZFSmalTag";
export default class ZFStoryCard extends Component {

    static propTypes = {
        boxStyle:ViewPropTypes.style,
        title:PropTypes.string,/** 标题 */
        content:PropTypes.string,/** 内容*/
        image:PropTypes.string,/** 图片数组 */
        tags:PropTypes.array,/** 标签 */


    }

    static defaultProps = {


    }
    constructor(props) {
        super(props);


    }


    getTag(){
        var list = [];
        this.props.tags.map((item,index)=>{
            list.push(
                <ZFSmalTag
                    type='tag'
                    key ={index}
                    value={item.value}
                    textStyle={{
                        color:item.color,
                        fontSize:item.size,
                    }} tagStyle={{
                        backgroundColor:item.bgColor,
                        paddingLeft:10,
                        paddingRight:10,
                        marginLeft:3,
                    }}
                />
            )
        })
        return list;
    }


    render() {
        const {
            image,
            title,
            content,
            boxStyle,
        }=this.props;

        var img = typeof image =='string' ?{uri:image}:image;
        return (
            <View style={{
                ...styles.container,
                ...boxStyle,
            }}>
                <Text style={styles.titleStyle}>{title}</Text>
                <View style={{
                        ...styles.layout,
                        marginTop:10,
                    }}>
                    <Image source={img} style={{
                        ...styles.imgStyle,
                    }}/>
                    <View style={{
                        marginLeft:10,
                        flex:1,
                        justifyContent:'space-between',
                    }}>
                        <Text style={styles.detailStyle}>{content}</Text>
                        <View style={{
                            ...styles.layout,
                        }}>
                            {this.getTag()}
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'#fff',
    },
    layout:{
      flexDirection:'row',
      alignItems:'center'
    },
    imgStyle:{
        width:120,
        height:80,
        borderRadius:8,
    },
    titleStyle:{
        color:'#333',
        fontSize:18,
    },
    detailStyle:{
        fontSize:14,
        color:'#666',
        flex:1,
    }
});