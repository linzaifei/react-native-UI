import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,
    Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');




import PropTypes from 'prop-types'
import ZFButton from "../Buttom/ZFButton";
export default class ZFAlertView extends Component {


    static propTypes = {
        tabs:PropTypes.func,

    }


    constructor(props) {
        super(props);
        this.state={
            isAlert :false,
            title:'',
            content:'',
            options:['确认'],
            onClickItem:null,
        }
    }

    /**
     * options
     *
     * [{
     *  title:'确认',
     *  backgroundColor:'',
     *  color:''
     * }]
     *
     * */

    /** 展示 */
    show(params,clickItem){
        this.setState({
            isAlert:true,
            title:params.title,
            content:params.content,
            options:params.options,
            onClickItem:clickItem,
        })
    }

    onClickItem(index){
        var self = this;
        self.setState({
            isAlert:false,
        },()=>{
            self.state.onClickItem && self.state.onClickItem(index)
        })
    }

    getItems(){
        const {
            options,
        }=this.state;
        return options && options.map((item,index)=>{
            return(
                <ZFButton
                    title={item.title}
                    btnStyle={{
                        backgroundColor: item.backgroundColor ? item.backgroundColor : '#fff',
                        ...styles.item_cell,
                    }}
                    textStyle={{
                        color: item.color ? item.color : '#333'
                    }}
                    onPress={() => {
                        this.onClickItem(index)
                    }}
                />
            )
        })
    }
    render() {
        const {
            isAlert,
            title,
            content,
            options
        }=this.state;
        const {
            tabs,
        }=this.props;
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={isAlert}
            >
                <View style={styles.container}>
                    {
                        tabs ?tabs(title,content,options):
                            <View style={styles.container_item}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.detail}>{content}</Text>
                                <View style={styles.itemSuper}>
                                    {this.getItems()}
                                </View>
                            </View>
                    }

                </View>
            </Modal>

        );
    }
}

var styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
    },
    container_item: {
        width:width*0.65,
        maxWidth:400,
        backgroundColor:'#fff',
        borderRadius:10,
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
    },
    title:{
        fontSize:18,
        color:'#333',
        textAlign:'center',
        padding:5,
    },
    detail:{
        fontSize:16,
        color:'#666',
        textAlign:'center',
        padding:10,
    },
    itemSuper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding:10,
    },
    item_cell:{

        borderRadius:30,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5,
        paddingBottom:5,
    },
    item:{
        fontSize:15,
        color:'#fff',
        textAlign:'center'
    }
});