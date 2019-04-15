import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, NetInfo,ActivityIndicator, ToastAndroid, Image, TouchableOpacity, TextInput, Picker } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import { Calendar } from 'react-native-calendars';
import { SessionManager } from '../Helper/SessionsManager';
import { CommonMethods } from '../Helper/CommonMethods';
import { ApiMethodNames, ErrorMessages, ResponseCodes, ResponseStatus } from '../Helper/GenericConstants';

export default class MeetingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLoder: false,
            text: '',
            leaveDate: 1541462400000,
            day: 0,
            time: 0,
            CompanyDetail: [],
            meetingday: [{ id: 1, value: '26 March 2020' }, { id: 2, value: '27 March 2020' }, { id: 3, value: '28 March 2020' },],
            meetingTime: [{ id: 1, value: '9:00 AM To 10:00 AM' }, { id: 2, value: '10:00 AM To 11:00 AM' }, { id: 3, value: '11:00 AM To 12:00 AM' },
            { id: 4, value: '12:00 AM To 1:00 PM' }, { id: 5, value: '1:00 PM To 2:00 PM' }, { id: 6, value: '2:00 PM To 3:00 PM' },
            { id: 7, value: '3:00 PM To 4:00 PM' }, { id: 8, value: '4:00 PM To 5:00 PM' }, { id: 9, value: '5:00 PM To 6:00 PM' },
            ]

        }
    }
    componentWillMount() {
        this.setState({
            ShowLoder: true
        }, () => {
            this.setState({
                CompanyDetail: this.props.navigation.state.params.data,
                ShowLoder: false
            }, () => {
           })
        })
    }
    cancel() {
        this.setState({
            day: 0,
            time: 0
        })
    }
    submit() {
        
        if(this.state.date==0){
            ToastAndroid.show(" Selet Meeting Date", ToastAndroid.LONG)
        }
       else if(this.state.time==0){
            ToastAndroid.show(" Selet Meeting Time", ToastAndroid.LONG)
        }
        else if(this.state.time==0){
            ToastAndroid.show(" Selet Meeting Time", ToastAndroid.LONG)
        }
        else{
            var obj = {
                date: this.state.meetingday.filter(a => a.id == this.state.day)[0].value,
                time: this.state.meetingTime.filter(a => a.id == this.state.time)[0].value,
                company_id: this.state.CompanyDetail.id,
                user_id: SessionManager.Userdata.id
            }
            this.InserMeeting(obj);
        }
   }

    InserMeeting(param){
      var Params = {
            user_id:param.user_id,
            company_id:param.company_id,
            date:param.date,
            time:param.time,
           
        }
        this.setState({
          ShowLoder: true
      }, () => {
      
        NetInfo.isConnected.fetch().then(
          isConnected => {
           if (isConnected) {
                CommonMethods.CallGETApi(ApiMethodNames.MeetingInsert, Params)
               .then(Response => {
                        this.setState({ ResponseData: Response.Data[0] },
                            () => {
                                if (this.state.ResponseData != undefined && this.state.ResponseData.flag==1) {
                                    this.setState({ Result: this.state.ResponseData,
                                        day:0,
                                        time:0,
                                       
                                    }, () => {
                                       ToastAndroid.show("Your Meeting Schedule is Successful", ToastAndroid.LONG);
                                        this.props.navigation.navigate("Mymeeting");
                                        this.forceUpdate();
                                    })
                                }
                                else if(this.state.ResponseData.flag==1){
                                    ToastAndroid.show("Try Again", ToastAndroid.LONG);
                                }
                                else
                                    ToastAndroid.show("Try Again", ToastAndroid.LONG);
                                this.setState({
                                    ShowLoder: false
                                });
                            }
                        )
                    }
                    );
            }
            else {
                ToastAndroid.show("Network Connection Failed please Connect the Internet", ToastAndroid.LONG);
                this.setState({
                    ShowLoder: false
                });
            }
      
        })
      })
      
      }

   
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <IconEn name="chat" size={25} style={{ color: tintColor, paddingTop: 10, justifyContent: 'center' }} />
        )
    }
    render() {
        return (
            <View style={styles.ParentContainer}>

                <View style={{ flexDirection: 'row', width: '100%', height: 55, justifyContent: 'center', backgroundColor: '#28A9E1' }}>
                    <View style={{ width: '80%', justifyContent: 'center', }}>
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Meeting</Text>
                    </View>
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center' }}>
                        <IconFA name="qrcode" size={25} style={{ right: 5, position: 'absolute', color: 'white', alignItems: 'flex-end', justifyContent: 'center' }} />
                    </TouchableOpacity>


                </View>
                {this.state.ShowLoder &&
                    <View style={styles.ActivityLoder}>
                        <ActivityIndicator style={[styles.centering, { height: 80 }]}
                            size="large" />
                    </View>
                }
                <ScrollView style={styles.ScrollContainer}>
                    <View style={styles.MainContainer}>
                        <View style={styles.FormContainer} >
                            <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ margin: 5, marginTop: 10, width: '98%', flexDirection: 'row', borderColor: '#28A9E1', borderStyle: 'solid', borderWidth: 2, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 12, paddingTop: 14 }}>Date :</Text>
                                    </View>
                                    <View style={{ width: '70%', }}>
                                        <Picker
                                            selectedValue={this.state.day}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ day: itemValue, })}>
                                            <Picker.Item label="Select Meeting Date " value={0} />
                                            {this.state.meetingday.map((val, index) => {
                                                return (
                                                    <Picker.Item key={index} label={val.value} value={val.id} />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{ margin: 5, width: '98%', flexDirection: 'row', borderColor: '#28A9E1', borderStyle: 'solid', borderWidth: 2, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 12, paddingTop: 14 }}>Time :</Text>
                                    </View>
                                    <View style={{ width: '70%', }}>
                                        <Picker
                                            selectedValue={this.state.time}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({ time: itemValue, })}>
                                            <Picker.Item label="Select Meeting Time " value={0} />
                                            {this.state.meetingTime.map((val, index) => {
                                                return (
                                                    <Picker.Item key={index} label={val.value} value={val.id} />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ margin: 5, width: '98%', flexDirection: 'row', borderColor: '#28A9E1', borderStyle: 'solid', borderWidth: 1, height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '30%' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 12, paddingTop: 14 }}>Company Name</Text>
                                    </View>
                                    <View style={{ width: '60%', }}>
                                        <Text>{this.state.CompanyDetail.company}</Text>
                                    </View>
                                </View>
                                <View style={{ margin: 5, width: '98%', flexDirection: 'row', borderColor: '#28A9E1', borderStyle: 'solid', borderWidth: 1, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '30%' }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 12, paddingTop: 14 }}>Hall No :</Text>
                                    </View>
                                    <View style={{ width: '60%', }}>
                                        <Text>{this.state.CompanyDetail.hall}</Text>
                                    </View>
                                </View>

                                <View style={{ width: '100%', marginBottom: 10, flexDirection: 'row', height: 45, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={this.submit.bind(this)} style={{ width: '40%', margin: 5, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#28A9E1', backgroundColor: '#28A9E1', borderStyle: 'solid', borderWidth: 2, }}>
                                        <Text style={{ color: 'white', }}> Meeting Schedule</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.cancel.bind(this)} style={{ width: '40%', height: 40, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#28A9E1', backgroundColor: '#28A9E1', borderStyle: 'solid', borderWidth: 2, }}>

                                        <Text style={{ color: 'white', }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ParentContainer: {
        width: '100%',
        height: '100%',
        // paddingBottom: 50
    },
    ScrollContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E6F1F1',
    },
    MainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E6F1F1',
    },
    Background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
    },
    ActivityLoder: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.7)',
        zIndex: 100
    },
    FormContainer: {
        width: '100%',
        // height: '100%',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    picker: {
        height: 19,
        width: '100%',
        transform: [
            { scaleX: 0.8 },
            { scaleY: 0.8 },
        ]
    }
});

