import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ART,
} from 'react-native';

import Proptypes from 'prop-types'

const {
    Surface,
    Shape,
    Path,

}=ART;

export default class ZFCirleProgressView extends Component {
    static propTypes={
        backgroundColor:Proptypes.string,
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


        const path = new Path()
            .moveTo(50,1)
            .arc(0,99,25)
            .arc(0,-99,25)
            .close()
        const path1 =new Path()
            .moveTo(50,1)
            .arc(0,99,25,0,Math.PI/2)


        return (
            <Surface width={111} height={111} style={{backgroundColor: 'yellow', marginTop: 10}}>

                <Shape
                    d={ path} stroke="black"
                    strokeWidth={5}
                    // x={10}
                />
                <Shape
                    d={ path1} stroke="red"
                    strokeWidth={5}
                    // x={10
                />
            </Surface>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});