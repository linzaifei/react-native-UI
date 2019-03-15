import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ART,
    Text,
} from 'react-native';

// const {
//     Text
// }=ART;

import PropTypes from 'prop-types'

export default class ZFDrawText extends Component {

    static propTypes={
        value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    }

    constructor(props) {

        super(props);


    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('nextProps======'+nextProps.value)
        console.log('props======'+this.props.value)
        if(this.props.value != nextProps.value){
            return true;
        }
        return false;
    }

    render() {
        console.log('========刷新了')
        const {
            value,
        }=this.props;
        var data = typeof value == 'string'?value :parseInt(value).toString()
        return (
            <Text style={{
                ...styles.textStyle,
            }}>
                {data}
            </Text>
        );
    }

}

var styles = StyleSheet.create({
    container: {},
    textStyle:{
        fontSize:12,
        color:'#fff'
    }
});