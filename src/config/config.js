
import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
} from 'react-native';

let {height, width} = Dimensions.get('window');

import './ZFColor'
import Styles from '../views/custom/customStyle'

global.IOS =(Platform.OS === 'ios');
global.Android =(Platform.OS === 'android');
global.SCREEN_WIDTH =width;
global.SCREEN_HEIGHT =height;

global.COLUMN = 'column';
global.ROW = 'row';
global.CENTER = 'center';
global.FLEXSTART = 'flex-start';
global.FLEXEND = 'flex-end';
global.SPACEBETWEEN = 'space-between';
global.SPACEAROUND = 'space-around';


global.RELATIVE = 'relative';
global.ABSOLUTE = 'absolute';

global.cusStyle = Styles;


