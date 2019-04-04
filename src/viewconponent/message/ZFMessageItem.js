import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';
import ZFMessage from "./ZFMessage";

import PropTypes from 'prop-types'
import ZFSmalTag from "../../components/tag/ZFSmalTag";
import  IconFont from '../../Icon/IconFont'
import ZFIconTag from "../../components/tag/ZFIconTag";
export default class ZFMessageItem extends Component {
    static propTypes = {
        ...ZFMessage.propTypes,
        titleViewStyle:ViewPropTypes.style,
        titleType:PropTypes.oneOf(['default','group']),/** 标签样式 */
        titleTag:PropTypes.string,/** 样式数字 */

        detailType:PropTypes.oneOf(['message','error','envelope']),
        detailViewStyle:ViewPropTypes.style,
        detailText:PropTypes.shape({
            name:PropTypes.string,
            message:PropTypes.string,
        }),

        messageType:PropTypes.oneOf(['default','no-notice','message','no-message']),
        message:PropTypes.number,

    }
    static defaultProps = {
        titleType:'default',
        detailType:'error',
        messageType:'default'
    }

    constructor(props) {
        super(props);


    }

    getTitleView(){
        const {
            titleType,
            titleTag,
            titleViewStyle,
        }=this.props;
        if (titleType == 'default'){
            return null;
        }
        return(
           <ZFSmalTag type={'tag'} value={titleTag} textStyle={{
               fontSize:12,
               ...titleViewStyle
           }} tagStyle={{
               backgroundColor:'#f37b1d',
               ...titleViewStyle
           }}  />
        )
    }
    getDetailView(){
        const {
            detailType,
            detailText,
            detailViewStyle,
        }=this.props;

        switch (detailType){
            case 'message':
              return(
                  <Text style={{
                      fontSize:13,
                      color:'#666',
                      ...detailViewStyle,
                  }}>
                      {detailText.name+':'+detailText.message}
                  </Text>
              )
                break;
            case 'error':
            case 'envelope':
                return(
                    <ZFIconTag
                        name= {detailType == 'error'?"ic_tishi":'ic_hongbao'}
                        size={12}
                        color="#e54d42"
                        text= {detailType=='error'?"消息未发出":'收到红包'}
                        boxStyle={{
                            backgroundColor:'transparent',
                            marginTop:10,
                            ...detailViewStyle,
                        }}
                        textStyle={{
                            fontSize:12,
                            color:'#666',
                            marginLeft:2,
                        }}
                    />
                )

                break;
        }
    }

    getMessageView(){
        const {
            message,
            messageType,
        }=this.props;

        switch (messageType){
            case 'no-notice':
                return(
                    <IconFont
                        name="ic_jingyin"
                        size={13}
                        color="#666"
                    />
                )
                break;
            case 'message':
            case 'no-message':
                if(message!=0){
                    return(
                        <ZFSmalTag type={'tag'} value={message.toString()} textStyle={{
                            fontSize:12,

                        }} tagStyle={{
                            backgroundColor: messageType =='message'? '#e54d42':'#8799a3'

                        }}  />
                    )
                }
                break;
        }
    }

    render() {
        return (
            <ZFMessage
                {...this.props}
                titleView={this.getTitleView()}
                detailView={this.getDetailView()}
                messageView={this.getMessageView()}
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    titleViewStyle:{
        borderRadius:20,
        backgroundColor:'#f37b1d',
        marginLeft:5,
        paddingLeft:8,
        paddingRight:8
    }
});