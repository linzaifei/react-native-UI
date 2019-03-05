import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ZFSelectItem from "./ZFSelectItem";
import ZFIconTag from "../../components/tag/ZFIconTag";


export default class ZFSelectIcon extends Component {

    static propTypes = {
        ...ZFIconTag.propTypes,
        ...ZFSelectItem.propTypes,
    }

    static defaultProps = {
        direction:'right',
    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log('=========nextState'+JSON.stringify(nextState))
        return false;
    }

    render() {
        console.log('ZFSelectIcon========刷新')
        return (
            <ZFSelectItem
                {...this.props}
            leftView={
                <ZFIconTag
                    {...this.props}
                />
            }
            />
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});