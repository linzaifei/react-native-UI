import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

    ART,
    Platform,
} from 'react-native';


// const {
//     Surface, Path, Group, Shape
// } = ART;

import Svg,{
    G,
    Path,
} from 'react-native-svg'

const scale = Platform.isTV ? 4 : 1;
export default class ZFBasePath extends Component {


    constructor(props) {

        super(props);


    }



    render() {
        // const pathRect = new Path()
        //     .moveTo(scale * 0, scale * 0)
        //     .lineTo(scale * 0, scale * 110)
        //     .lineTo(scale * 110, scale * 110)
        //     .lineTo(scale * 110, scale * 0)
        //     .close();
        //
        // const pathCircle0 = new Path()
        //     .moveTo(scale * 30, scale * 5)
        //     .arc(scale * 0, scale * 50, scale * 25)
        //     .arc(scale * 0, -scale * 50, scale * 25)
        //     .close();
        //
        // const pathCircle1 = new Path()
        //     .moveTo(scale * 30, scale * 55)
        //     .arc(scale * 0, scale * 50, scale * 25)
        //     .arc(scale * 0, -scale * 50, scale * 25)
        //     .close();
        //
        // const pathCircle2 = new Path()
        //     .moveTo(scale * 55, scale * 30)
        //     .arc(scale * 50, scale * 0, scale * 25)
        //     .arc(-scale * 50, scale * 0, scale * 25)
        //     .close();
        //
        // const pathCircle3 = new Path()
        //     .moveTo(scale * 55, scale * 80)
        //     .arc(scale * 50, scale * 0, scale * 25)
        //     .arc(-scale * 50, scale * 0, scale * 25)
        //     .close();

        return (
            <View>

                {/*<Surface width={scale * 200} height={scale * 200}>*/}
                    {/*<Group>*/}
                        {/*<Shape*/}
                            {/*d={pathRect}*/}
                            {/*stroke="#000080"*/}
                            {/*fill="#000080"*/}
                            {/*strokeWidth={scale}*/}
                        {/*/>*/}
                        {/*<Shape*/}
                            {/*d={pathCircle0}*/}
                            {/*stroke="#FF0000"*/}
                            {/*fill="#FF0000"*/}
                            {/*strokeWidth={scale}*/}
                        {/*/>*/}
                        {/*<Shape*/}
                            {/*d={pathCircle1}*/}
                            {/*stroke="#00FF00"*/}
                            {/*fill="#00FF00"*/}
                            {/*strokeWidth={scale}*/}
                        {/*/>*/}
                        {/*<Shape*/}
                            {/*d={pathCircle2}*/}
                            {/*stroke="#00FFFF"*/}
                            {/*fill="#00FFFF"*/}
                            {/*strokeWidth={scale}*/}
                        {/*/>*/}
                        {/*<Shape*/}
                            {/*d={pathCircle3}*/}
                            {/*stroke="#FFFFFF"*/}
                            {/*fill="#FFFFFF"*/}
                            {/*strokeWidth={scale}*/}
                        {/*/>*/}

                    {/*</Group>*/}
                {/*</Surface>*/}

                <Svg
                    width="300"
                    height="400"
                >
                    <G fill="none" stroke="#3d5875">
                        <Path strokeLinecap="round" strokeWidth="8" d="M5 8 l215 0" />
                    </G>


                </Svg>


            </View>


        );
    }

}

var styles = StyleSheet.create({
    container: {}
});