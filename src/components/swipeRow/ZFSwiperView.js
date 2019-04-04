import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Proptypes from 'prop-types'

export default class ZFSwiperView extends Component {

    static propTypes={
        children:Proptypes.node,/** 子试图 */

    }

    constructor(props) {

        super(props);


    }


    render() {
        const {
                children
        }=this.props;
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex:1
    }
});