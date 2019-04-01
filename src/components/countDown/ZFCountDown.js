import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    ART,
    InteractionManager,
} from 'react-native';

import Proptypes from 'prop-types'

const {
    Surface,
    Path,
    Group,

    Shape,
}=ART;

export default class ZFCountDown extends Component {

    static propTypes={
        boxStyle:ViewPropTypes.style,
        textStyle:ViewPropTypes.style,
        tagStyle:ViewPropTypes.style,
        tpl:Proptypes.string,/** 时间格式 {h}:{m}:{s} {h}时{m}分{s} */
        time:Proptypes.number,/** 开始时间 时间戳*/
        intervalTime:Proptypes.number,/** 时间间隔*/
        completed:Proptypes.func,/** 倒计时结束回调 */
        type:Proptypes.oneOf(['down','up']),
        canAuto:Proptypes.bool,
    }

    static defaultProps={
        tpl:'{h}:{m}:{s}',
        time:new Date().getTime() + 10000000, //1551347000000,
        intervalTime:1000,
        type:'down',
        canAuto:true,
    }

    constructor(props) {
        super(props);
        this.state={
            day:'00',
            hour:'00',
            minute:'00',
            second:'00',
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        if (nextState.day !== this.state.day
            ||nextState.hour !== this.state.hour
            ||nextState.minute !== this.state.minute
            ||nextState.second !== this.state.second) {

            return true;
        }
        return false;
    }



    componentDidMount(){
      this.props.canAuto && this.startTimer()
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    startTimer(){
        var self = this;
        const {
            intervalTime,
        }=this.props;


            self.timer = setInterval(
                () => {
                    InteractionManager.runAfterInteractions(() => {
                         self.downTime()
                    });
                },
                intervalTime
            );


    }

    downTime(){
        var self = this;
        const {
            time,
            completed,
            type,
        }=this.props;

        var timeSpacing;
        switch (type){
            case 'down':
                 timeSpacing = time - new Date().getTime();
                break;
            case 'up':
                var day = new Date().getDay();
                var hour = new Date().getHours();
                var minute = new Date().getMinutes();
                var second = new Date().getSeconds();
                self.setState({
                    day: day < 10 ? '0' + day : day,
                    hour: hour < 10 ? '0' + hour :  hour,
                    minute: minute < 10 ? '0' + minute :  minute,
                    second: second < 10 ? '0' + second :  second
                })
                return;
                break;
        }

        // console.log('time====='+time)
        console.log('time====='+timeSpacing)
        if (timeSpacing <0){
            self.timer && clearTimeout(self.timer);
            completed&&completed()
            return;
        }

        var day = Math.floor(timeSpacing /(24 * 60 * 60 * 1000))
        var hour = Math.floor((timeSpacing -day* 24 * 60 * 60 * 1000) / (60*60*1000))
        var minute = Math.floor((timeSpacing -day* 24 * 60 * 60 * 1000 -hour * 60*60*1000) / (60*1000))
        var second = Math.floor((timeSpacing -day* 24 * 60 * 60 * 1000 -hour * 60*60*1000-minute * 60 * 1000) / (1000))

        // console.log('day==hour== minute== second=='+day + ' '+hour +' '+minute+' '+second)

        self.setState({
            day: day < 10 ? '0' + day : day,
            hour: hour < 10 ? '0' + hour :  hour,
            minute: minute < 10 ? '0' + minute :  minute,
            second: second < 10 ? '0' + second :  second
        })


        // self.tp.setNativeProps({
        //     value:second,
        //     style:{
        //         color:'red',
        //     }
        // })
    }

    /** 获取节点 */
    getDot (prevTagIndex, nextTagIndex = -1) {
        const {
            tpl,
        }=this.props;
        if (nextTagIndex === -1) {
            return tpl.substr(prevTagIndex + 2,0)
        }
       return tpl.substr(prevTagIndex + 2,1);
    }

    /** 获取布局 */
    getLayout(current,next,conent){
        const {
            tpl,
            boxStyle,
            textStyle,
            tagStyle,
        }=this.props;

       if (current !=-1){
           return (
               <View style={styles.container}>
                   <View style={{
                       ...styles.boxStyle,
                       ...boxStyle,
                       alignItems:'center',
                       justifyContent:'center'
                   }}>
                       <Text ref={o=>this.tp=o} style={{
                       ...styles.textStyle,
                       ...textStyle,

                   }}>{conent}</Text>
                   </View>
                   <Text style={{
                       ...styles.tagStyle,
                       ...tagStyle,
                   }}>{this.getDot(current,next)}</Text>
               </View>
           )
       }
    }


    render() {
        // console.log('=====刷新界面了')
        const {
            tpl,
        }=this.props;
        const {
            day,
            hour,
            minute,
            second,
        }=this.state;

        var tplIndexOfDays = tpl.indexOf('d');
        var tplIndexOfHours = tpl.indexOf('h');
        var tplIndexOfMinutes = tpl.indexOf('m');
        var tplIndexOfSeconds = tpl.indexOf('s');

        // var str = 'M2 2 27 2 27 27 2 27 2 2'
        // var path = new Path().push(str)


        return (
            <View style={styles.container}>
                {this.getLayout(tplIndexOfDays,tplIndexOfHours,day)}
                {this.getLayout(tplIndexOfHours,tplIndexOfMinutes,hour)}
                {this.getLayout(tplIndexOfMinutes,tplIndexOfSeconds,minute)}
                {this.getLayout(tplIndexOfSeconds,-1,second)}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
    },
    boxStyle:{
        width:25,
        height:25,
        borderColor:'#333',
        borderWidth:1,

    },
    textStyle:{
        fontSize:14,
        color:'#333',
        textAlign:'center'
    },
    tagStyle:{
        fontSize:14,
        color:'#333',
        padding:3,
    }
});