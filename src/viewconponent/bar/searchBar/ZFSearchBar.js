import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';

import PropTypes from 'prop-types'
import ZFSearchBarItem from "./ZFSearchBarItem";
import ZFButtom from "../../../components/Buttom/ZFButtom";

export default class ZFSearchBar extends Component {

    static propTypes = {
        barStyle:ViewPropTypes.style,
        leftView:PropTypes.element,
        rightView:PropTypes.element,
        ...ZFSearchBarItem.propTypes,
        onPress:PropTypes.func,
    }

    static defaultProps = {


    }
    constructor(props) {
        super(props);


    }


    render() {
        const {
            barStyle,
            leftView,
            rightView,
            onPress,
        }=this.props;
        return (
            <View style={{
                padding:5,
                backgroundColor:'#fff',
                ...barStyle,
                ...styles.container,
            }}>
                {leftView}
                <ZFSearchBarItem
                    {...this.props}
                    image={require('./ic_search.png')}

                />
                {
                    rightView?rightView:
                        <ZFButtom
                            title="搜索"
                            onPress={onPress}
                            btnStyle={{
                                backgroundColor:'#39b54a',
                                borderRadius:30,
                                marginLeft:5,
                            }}
                            textStyle={{
                                color:'#fff',
                                fontSize:15,
                            }}
                        />
                }
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
    }
});