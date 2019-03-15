import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ViewPropTypes,
    Image,
} from 'react-native';
import PropTypes from 'prop-types'

function repaceOne(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export default class ZFTag extends Component {

    static propTypes = {
        boxStyle:ViewPropTypes.style,
        textStyle:ViewPropTypes.style,
        imgStyle:ViewPropTypes.style,
        direction: PropTypes.oneOf(['left','right','top','bottom']),/** 开关状态 */
        space:PropTypes.number,
        uri:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),//
        text:PropTypes.string,
        leftTopView:PropTypes.element,
        rightBottomView:PropTypes.element,
    }

    static defaultProps = {
        direction:'left',
        space:5
    }
    constructor(props) {
        super(props);
    }

    getText(){
        const {
            textStyle,
            text,
        }=this.props;

        if (text){
            return (
                <Text style={{
                    fontSize:15,
                    color:'#666',
                    ...textStyle,
                }}>{text}</Text>
            )
        }
    }
    getImg(){
        const {
            direction,
            space,
            uri,
            imgStyle,
        }=this.props;

        // var word = repaceOne(direction);
        // var key = 'margin'+word;
        // var subStyle = new Map();
        // subStyle.setValue(key)
        //
        //
        // console.log('==================='+JSON.stringify(subStyle))
        //

        var subStyle;
        switch (direction){
            case 'left':
                subStyle={
                    marginLeft:space
                }
                break;
            case 'right':
                subStyle={
                    marginRight:space
                }
                break;
            case 'top':
                subStyle={
                    marginTop:space
                }
                break;
            case 'bottom':
                subStyle={
                    marginBottom:space
                }
                break;
        }

        var img = typeof uri == 'string'?{uri:uri}:uri;

        if(img){
            return (
                <Image source={img} style={{
                    width:30,
                    height:30,
                    ...imgStyle,
                    ...subStyle,
                }} />
            )
        }
    }


    render() {
        const {
            boxStyle,
            direction,
            leftTopView,
            rightBottomView
        }=this.props;

        let layout = (direction=='left' || direction=='right')
        let dirc = (direction=='left' || direction=='top')
        return (
            <View style={[styles.container,boxStyle,layout?styles.layout_row:styles.layout_column,]}>
                {
                    dirc ? leftTopView?leftTopView: this.getText() : null
                }
                {rightBottomView?rightBottomView:this.getImg()}
                {
                    !dirc ? leftTopView?leftTopView: this.getText() : null
                }
            </View>
        );


    }

}

var styles = StyleSheet.create({
    container: {
        padding:4,
        backgroundColor:'#fff',

    },
    layout_row:{
        flexDirection:'row',
        alignItems:'center',
    },
    layout_column:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
});