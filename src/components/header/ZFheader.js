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
    Group,
    LinearGradient,
    Pattern,
}=ART;


export default class ZFheader extends Component {

    static propTypes={
        imgs:Proptypes.array.isRequired,/** 头像 */

    }

    static defaultProps={

    }


    constructor(props) {
        super(props);

    }



    render() {

        // var pattern = new Pattern('https://image.weilanwl.com/img/square-1.jpg',100,100,0,0);
        var path = new Path().push('M0 0 L200 0 L200 100 L0 100 L0 0')
        return (
            <Surface width ={300} height={300} style={{backgroundColor:'yellow'}}>
                <Shape d={path} fill={'red'} />
            </Surface>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});