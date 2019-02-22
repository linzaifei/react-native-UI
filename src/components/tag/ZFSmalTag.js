import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    ViewPropTypes,
    ART,
} from 'react-native';
import Proptypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,
}=ART;

// var AnimationShape = Animated.createAnimatedComponent(Shape)
export default class ZFSmalTag extends Component {

    static propTypes={
        backgroundColor:Proptypes.string,
        type:Proptypes.oneOf(['horizontal','vertical','circle']),
        line:Proptypes.number,
        vLine:Proptypes.number,
    }

    static defaultProps={
        type:'circle',
        line:10,
        vLine:10
    }

    constructor(props) {
        super(props);
        this.state={
            reat: new Animated.Value(0),
        }
    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps,nextState){

        return true
    }



    render() {
        const {
            reat
        }=this.state;
        const {
            type,
            backgroundColor,
            line,
            vLine,
        }=this.props;


        // var path = new Path()
        //     .moveTo(10, 20)
        //     .lineTo(line,20);

        const path = new Path()
            .moveTo(10,100)
            .arc(80,150,50);

        return (
            <Surface width={300} height={300} style={{backgroundColor: 'yellow', marginTop: 10}}>

                <Shape
                    d={ path} stroke="black"
                     // strokeWidth={vLine}
                    // x={10}

                />
            </Surface>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});