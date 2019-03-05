import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Animated,
    PanResponder,
    ART,
} from 'react-native';
import ZFLineProgressView from "../progress/ZFLineProgressView";

const {
    Surface,
    Shape,
    Path,
    Group,
    Text,
    Transform
}=ART;
import Proptypes from 'prop-types'

import ZFWedegView from "../progress/ZFWedegView";

export default class ZFSlider extends Component {

    static propTypes= {
        x:Proptypes.number,
        y:Proptypes.number,
        update:Proptypes.func,

    }

    static defaultProps={
        x:40,
        y:20,
    }


    constructor(props) {
        super(props);
        this.state={
            transformXY:new Animated.ValueXY(),

        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove: (event,data,)=>{

            },
            onPanResponderRelease:(x,data)=>{
                console.log(data)

                // this.state.transformXY.setValue(0),
                // Animated.timing(this.state.transformXY,{
                //     toValue:{x:data.x0 +data.dx,y:0}
                // }).start()
                this.props.update(data.dx,data.dy)
            },
            onPanResponderTerminate:()=>{
                // Animated.spring(this.state.transformXY,{
                //     toValue:{x:0,y:0}
                // }).start()
            },
        })

    }


    render() {
        const {
            x,
            y,
        }=this.props;

        var str = 'M 0.000 10.000 L 11.756 16.180 L 9.511 3.090 L 19.021 -6.180 L 5.878 -8.090 L 0.000 -20.000 L -5.878 -8.090 L -19.021 -6.180 L -9.511 3.090 L -11.756 16.180 L 0.000 10.000'
        var path = new Path().push(str);
        return (
            <View >

                <Surface width={200} height={300} style={{backgroundColor:'yellow'}}>

                    {/*<Group*/}
                        {/*fill={'oange'}*/}
                        {/*transform= {new Transform().translate(x, y)}*/}
                        {/*{...this._panResponder.panHandlers}*/}
                        {/*>*/}
                        {/*<Shape*/}
                            {/*d ={path}*/}
                            {/*x={20}*/}
                            {/*y={20}*/}
                            {/*strokeWidth={1}*/}
                            {/*stroke={'red'}*/}

                        {/*/>*/}
                    {/*</Group>*/}



                    <ZFWedegView startAngle={0} endAngle={260} progressColor={['red','orange']} type={'sector'} radius={40} />


                </Surface>



                {/*<ZFLineProgressView  strokeWidth={8} progress={0.4} progressStyle={{marginTop:5}}  progressColor="#f37b1d" />*/}
                {/*<Animated.View style={{*/}
                    {/*width:20,*/}
                    {/*height:20,*/}
                    {/*borderRadius:10,*/}
                    {/*// position:'absolute',*/}
                    {/*// left:transformXY.x,*/}
                    {/*// alignSelf:'center',*/}
                    {/*backgroundColor:'red',*/}
                    {/*transform :[*/}
                        {/*{*/}
                            {/*translateX:transformXY.x,*/}
                        {/*}*/}
                    {/*]*/}

                {/*}} {...this._panResponder.panHandlers}>*/}
                {/*</Animated.View>*/}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});