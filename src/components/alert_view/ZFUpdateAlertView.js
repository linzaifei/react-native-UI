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
import ZFSliderBar from "../slider/ZFSliderBar";

export default class ZFUpdateAlertView extends Component {


    static propTypes = {
        tabs: PropTypes.func,
        progress:PropTypes.number,
    }

    static defaultProps={
        progress:0,
    }



    constructor(props) {
        super(props);
        this.state = {
            isAlert: false,
            title: '',
            content: '',
            options: ['确认'],
            onClickItem: null,

            canUpdate:false,
        }
    }

    /**
     * options
     *
     * [{
     *  title:'确认',
     *  backgroundColor:'',
     *  color:'',
     *  update:true, 更新
     * }]
     *
     * */

    /** 展示 */
    show(params, clickItem) {
        this.setState({
            isAlert: true,
            title: params.title,
            content: params.content,
            options: params.options,
            onClickItem: clickItem,
        })
    }

    componentWillReceiveProps(nextProps){
        console.log('progress=======',nextProps.progress)
        // if(nextProps.isOn != this.props.isOn){
        //     this.state.isOn = nextProps.isOn;
        //     this.startAnimation()
        // }
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log('progress=======',nextProps.progress)
        return true
    }


    onClickItem(item,index) {
        var self = this;

        self.setState({
            canUpdate:item.update,
            isAlert: item.update?true:false,
        },()=>{
            self.state.onClickItem && self.state.onClickItem(index,item)
        })

    }

    getItems() {
        const {
            options,
        } = this.state;
        return options && options.map((item, index) => {
            return (
                <ZFButton
                    key={index}
                    title={item.title}
                    btnStyle={{
                        backgroundColor: item.backgroundColor ? item.backgroundColor : '#fff',
                        ...styles.item_cell,
                        paddingLeft:options.length==1 ?35:20,
                        paddingRight:options.length==1 ?35:20,
                    }}
                    textStyle={{
                        color: item.color ? item.color : '#333'
                    }}
                    onPress={() => {
                        this.onClickItem(item,index)
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
            options,
            canUpdate,
        } = this.state;
        const {
            tabs,
            progress,
        } = this.props;
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={isAlert}
            >
                <View style={styles.container}>
                    <View style={styles.container_item}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.detail}>{content}</Text>
                        {
                            canUpdate?
                                <ZFSliderBar
                                    progressColor={['#6739b6', '#39b54a']}
                                    showTag={false}
                                    value={progress}
                                    sliderStyle={{
                                        marginTop: 10,
                                        marginBottom:20
                                    }}
                                    onValueChange={(value)=>{
                                    if(value>=1){
                                     this.setState({
                                         isAlert:false
                                     })
                                    }
                                    }}
                                />:
                                <View style={styles.itemSuper}>
                                    {this.getItems()}
                                </View>
                        }
                    </View>
                </View>
            </Modal>

        );
    }
}

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
    },
    container_item: {
        width: width * 0.65,
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        padding: 5,
    },
    detail: {
        fontSize: 15,
        color: '#666',
        padding: 10,
        textAlign: 'center',
    },
    itemSuper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    item_cell:{
        borderRadius:30,

        paddingTop:5,
        paddingBottom:5,
    },

});