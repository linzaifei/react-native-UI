import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,

} from 'react-native';
import Proptypes from 'prop-types'
import ZFButton from "../Buttom/ZFButton";


export default class ZFStrpperBar extends Component {

    static propTypes={
        style:ViewPropTypes.style,
        count:Proptypes.number,
        completed:Proptypes.func,
    }

    static defaultProps={
        count:0,
    }

    constructor(props){
        super(props)
        this.state={
            count:this.props.count,
        }
    }

    shouldComponentUpdate(nextProps,nextState) {

        if (nextState.count != this.state.count) {

            return true;
        }
        return false;
    }

    render() {
        var self = this;
        const {
            count,
        }=self.state;
        const {
            style,
            completed,
        }=self.props;
        return (
            <View style={{
                ...style,
                ...styles.container,
            }}>
                <ZFButton
                    title="-"
                    textStyle={styles.textStyle}
                    btnStyle={{
                        ...styles.btnStyle,
                        marginRight:6
                    }}
                    onPress={()=>{
                        self.setState({
                            count:count==0?0: count-1,
                        },()=>{
                            count!=0 && completed && completed(count);
                        })
                    }}
                />
                <Text style={{
                    fontSize:18,
                    color:'#666',
                    textAlign:'center'
                }}>{count}</Text>
                <ZFButton
                    title="+"
                    textStyle={styles.textStyle}
                    btnStyle={{
                        ...styles.btnStyle,
                        marginLeft:6
                    }}
                    onPress={()=>{
                        self.setState({
                            count:count+1,
                        },()=>{
                            count!=0 &&completed && completed(count);
                        })
                    }}
                />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btnStyle:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ddd',
        width:26,
        height:26,
        paddingTop:0,
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0,
        backgroundColor:'transparent'
    },
    textStyle:{
        color:'#666',
        fontSize:18
    }
});