import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    ViewPropTypes,
    Easing,
} from 'react-native';

import Proptypes from 'prop-types'

import ZFCirleProgressView from './ZFCirleProgressView'
import  ZFLineProgressView from './ZFLineProgressView'
const AnimatedCirleProgress = Animated.createAnimatedComponent(ZFCirleProgressView);
const AnimationLineProgress = Animated.createAnimatedComponent(ZFLineProgressView);
export default class ZFAnimationProgress extends Component {

    static propTypes={
        ...ZFLineProgressView.propTypes,

    }


    constructor(props){
        super(props)
        this.state={
            progress1:new Animated.Value(0),
        }
    }

    componentDidMount(){
        this.startAnimation(this.props.progress)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.progress != this.props.progress) {
            this.startAnimation(nextProps.progress);
        }
    }

    startAnimation(progress){
        this.state.progress1.setValue(0);
        Animated.parallel([
            Animated.timing(this.state.progress1,{
                toValue:progress,
                easeOut:Easing.linear()
            }),
        ]).start()

    }

    render() {
        console.log('========')
        var self = this;
        const {


        }=self.props;
        const {

            progress1,

        }=self.state;
        return (
            <View style={{
                ...styles.container,
            }}>
                {/*<AnimatedCirleProgress ref={o=>this.tag=o} line={progress1} />*/}

                <AnimationLineProgress {...self.props} progress={progress1} />


            </View>
        );
    }


}

var styles = StyleSheet.create({
    container: {}
});