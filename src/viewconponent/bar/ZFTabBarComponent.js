
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Animated,
    SafeAreaView,
    Platform,
} from 'react-native';
const majorVersion = parseInt(Platform.Version, 10);
const isIos = Platform.OS === 'ios';
const isIOS11 = majorVersion >= 11 && isIos;

const DEFAULT_MAX_TAB_ITEM_WIDTH = 125;

import PropTypes from 'prop-types'

class TouchableWithoutFeedbackWrapper extends React.Component<*> {
    render() {
        const {
            onPress,
            onLongPress,
            testID,
            accessibilityLabel,
            ...props
        } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={onPress}
                onLongPress={onLongPress}
                testID={testID}
                hitSlop={{ left: 15, right: 15, top: 5, bottom: 5 }}
                accessibilityLabel={accessibilityLabel}
            >
                <View {...props} />
            </TouchableWithoutFeedback>
        );
    }
}

export default class ZFTabBarComponent extends Component{



    _renderLabel = ({ route, focused }) => {
        const {
            activeTintColor,
            inactiveTintColor,
            labelStyle,
            showLabel,
            showIcon,
            allowFontScaling,
        } = this.props;

        if (showLabel === false) {
            return null;
        }
        console.log('======'+this.props.renderIcon)

        const label = this.props.getLabelText({ route });
        const tintColor = focused ? activeTintColor : inactiveTintColor;

        if (typeof label === 'string') {

            return (

                <Animated.Text
                    numberOfLines={1}
                    style={[
                        styles.label,
                        { color: tintColor },
                        showIcon && this._shouldUseHorizontalLabels()
                            ? styles.labelBeside
                            : styles.labelBeneath,
                        labelStyle,
                    ]}
                    allowFontScaling={allowFontScaling}
                >
                    {label}
                </Animated.Text>
            );
        }

        if (typeof label === 'function') {

            return label({ route, focused, tintColor });
        }

        return label;
    };


    _shouldUseHorizontalLabels = () => {
        const { routes } = this.props.navigation.state;
        const { isLandscape, dimensions, adaptive, tabStyle } = this.props;

        if (!adaptive) {
            return false;
        }

        if (Platform.isPad) {
            let maxTabItemWidth = DEFAULT_MAX_TAB_ITEM_WIDTH;

            const flattenedStyle = StyleSheet.flatten(tabStyle);

            if (flattenedStyle) {
                if (typeof flattenedStyle.width === 'number') {
                    maxTabItemWidth = flattenedStyle.width;
                } else if (typeof flattenedStyle.maxWidth === 'number') {
                    maxTabItemWidth = flattenedStyle.maxWidth;
                }
            }

            return routes.length * maxTabItemWidth <= dimensions.width;
        } else {
            return isLandscape;
        }
    };

    render(){
        const {
            navigation,
            activeBackgroundColor,
            inactiveBackgroundColor,
            onTabPress,
            onTabLongPress,
            safeAreaInset,
            style,
            tabStyle,
            label
        } = this.props;

        const { routes } = navigation.state;

        const tabBarStyle = [
            styles.tabBar,
            styles.tabBarRegular,
            style,
        ];

        return(
            <SafeAreaView style={tabBarStyle} forceInset={safeAreaInset}>
                {routes.map((route, index) => {
                    const focused = index === navigation.state.index;
                    const scene = { route, focused };
                    const accessibilityLabel = this.props.getAccessibilityLabel({
                        route,
                    });
                    const testID = this.props.getTestID({ route });

                    const backgroundColor = focused
                        ? activeBackgroundColor
                        : inactiveBackgroundColor;

                    const ButtonComponent =
                        this.props.getButtonComponent({ route }) ||
                        TouchableWithoutFeedbackWrapper;
                    console.log('====='+JSON.stringify(this.props))
                    return (
                        <ButtonComponent
                            key={route.key}
                            onPress={() => onTabPress({ route })}
                            onLongPress={() => onTabLongPress({ route })}
                            testID={testID}
                            accessibilityLabel={accessibilityLabel}
                            style={[
                                styles.tab,
                                { backgroundColor },
                                styles.tabLandscape,
                                tabStyle,
                            ]}
                        >
                            {this._renderLabel(scene)}
                        </ButtonComponent>
                    );
                })}
            </SafeAreaView>
        )
    }
}

const DEFAULT_HEIGHT = 49;
const COMPACT_HEIGHT = 29;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .3)',
        flexDirection: 'row',
    },
    tabBarCompact: {
        height: COMPACT_HEIGHT,
    },
    tabBarRegular: {
        height: DEFAULT_HEIGHT,
    },
    tab: {
        flex: 1,
        alignItems: isIos ? 'center' : 'stretch',
    },
    tabPortrait: {
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    tabLandscape: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconWithoutLabel: {
        flex: 1,
    },
    iconWithLabel: {
        flex: 1,
    },
    iconWithExplicitHeight: {
        height: Platform.isPad ? DEFAULT_HEIGHT : COMPACT_HEIGHT,
    },
    label: {
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    labelBeneath: {
        fontSize: 11,
        marginBottom: 1.5,
    },
    labelBeside: {
        fontSize: 12,
        marginLeft: 15,
    },
});