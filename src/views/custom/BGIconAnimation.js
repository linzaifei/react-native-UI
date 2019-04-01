import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';







export default class BGIconAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            strokeDashOffset: new Animated.Value(38)
        }
    }

    changeStroke = () => {

    };

    componentDidMount(){
        // 使用炫酷的animated让小线段愉悦的奔跑�
        Animated.spring(
            this.state.strokeDashOffset,
            {
                toValue: 243
            }
        ).start();
    }



    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.changeStroke}
            >

            </TouchableWithoutFeedback>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});