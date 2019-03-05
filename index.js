/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry,YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: Failed prop type: Invalid props.textStyle key ']);
import App from './App';
import './src/config/config'
import Index from './src/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Index);
