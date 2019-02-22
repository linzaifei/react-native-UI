import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';

import PropTypes from 'prop-types'

export default class ZFSwitch extends Component {

    static calculateDimensions(size) {
        switch (size) {
            case 'small':
                return ({
                    width: 50, padding: 10, cercleWidth: 15, cercleHeight: 15, translateX: 22,
                });
            case 'large':
                return ({
                    width: 100, padding: 20, cercleWidth: 30, cercleHeight: 30, translateX: 38,
                });
            default:
                return ({
                    width: 50, padding: 15, cercleWidth: 23, cercleHeight: 23, translateX: 30,
                });
        }
    }

    static propTypes = {
        isOn: PropTypes.bool.isRequired,
        label: PropTypes.string,
        onColor: PropTypes.string.isRequired,
        offColor: PropTypes.string.isRequired,
        size: PropTypes.string,
        labelStyle: PropTypes.object,
        onToggle: PropTypes.func.isRequired
    }

    static defaultProps = {
        isOn : false,
        onColor: '#634fc9',
        offColor: '#ecf0f1',
        size: 'medium',
        labelStyle: {}
    }

    offsetX = new Animated.Value(0);
    dimensions = ZFSwitch.calculateDimensions(this.props.size);

    createToggleSwitchStyle = () => ({
        justifyContent: 'center',
        width: this.dimensions.width,
        borderRadius: 20,
        padding: this.dimensions.padding,
        backgroundColor: (this.props.isOn) ? this.props.onColor : this.props.offColor,
    })

    createInsideCercleStyle = () => ({
        margin: 4,
        position: 'absolute',
        backgroundColor: 'white',
        transform: [{ translateX: this.offsetX }],
        width: this.dimensions.cercleWidth,
        height: this.dimensions.cercleHeight,
        borderRadius: (this.dimensions.cercleWidth / 2),
    });

    render() {
        const toValue = this.props.isOn
            ? this.dimensions.width - this.dimensions.translateX
            : 0;

        Animated.timing(
            this.offsetX,
            {
                toValue,
                duration: 300,
            },
        ).start();

        return (
            <View style={styles.container}>
                {(this.props.label)
                    ? <Text style={[styles.labelStyle, this.props.labelStyle]}>{this.props.label}</Text>
                    : null
                }
                <TouchableOpacity
                    style={this.createToggleSwitchStyle()}
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.onToggle(!this.props.isOn);
                    }}
                >
                    <Animated.View style={this.createInsideCercleStyle()} />
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        marginHorizontal: 10,
    },
});