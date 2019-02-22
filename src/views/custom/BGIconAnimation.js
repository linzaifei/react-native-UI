import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

import Svg,{
    G,
    Path,
}from 'react-native-svg'


// 注意要用 Animated.createAnimatedComponent 让组件可动画化
let AnimatePath = Animated.createAnimatedComponent(Path);

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
                <Svg
                    height="100"
                    width="100"
                >

                    <Path
                        d="M5 9 l23 A1 40 l30 10"
                        fill="none"
                        stroke="cyan"
                        strokeWidth="10"
                        strokeLinecap="round"

                    />
                    {/*<G fill="none">*/}
                        {/*<AnimatePath*/}
                            {/*d="M5 8  l215 0 "*/}
                            {/*stroke="#0078FF"*/}
                            {/*strokeWidth="3"*/}
                            {/*strokeDasharray="28,215"*/}
                            {/*strokeDashoffset={this.state.strokeDashOffset}*/}
                        {/*/>*/}
                    {/*</G>*/}
                </Svg>
            </TouchableWithoutFeedback>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});