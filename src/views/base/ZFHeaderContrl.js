import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ZFheader from "../../components/header/ZFheader";


export default class ZFHeaderContrl extends Component {


    constructor(props) {

        super(props);


    }


    render() {
        return (
            <View>
                <ZFheader />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});