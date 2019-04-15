import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NetInfo, ToastAndroid, ScrollView, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import { CommonMethods } from '../Helper/CommonMethods';
import { SessionManager } from '../Helper/SessionsManager';
import { ApiMethodNames, ErrorMessages, ResponseCodes, ResponseStatus } from '../Helper/GenericConstants';

export default class Mymeeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLoder: false,
            text: '',
            Result: [],

        }
    }
    componentWillMount() {
        this.setState({
            ShowLoder: true
        }, () => {
            if (SessionManager.Userdata != undefined) {
                this.ReadMeeting();
            }
            else {
                this.props.navigation.navigate("Login");
            }
        })

    }
    ReadMeeting() {

        var Params = {
            user_id: SessionManager.Userdata.id
        }
        this.setState({
            ShowLoder: true
        }, () => {

            NetInfo.isConnected.fetch().then(
                isConnected => {
                    if (isConnected) {
                        CommonMethods.CallGETApi(ApiMethodNames.ReadMeeting, Params)
                            .then(Response => {
                                this.setState({ ResponseData: Response.Data[0] },
                                    () => {
                                        if (this.state.ResponseData != undefined) {
                                            this.setState({
                                                Result: this.state.ResponseData.data,
                                            }, () => {
                                                this.forceUpdate();
                                            })
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

    CancelMeeting(val) {
        var Params = {
            id: val.id,
            user_id: SessionManager.Userdata.id
        }
        this.setState({
            ShowLoder: true
        }, () => {

            NetInfo.isConnected.fetch().then(
                isConnected => {
                    if (isConnected) {
                        CommonMethods.CallGETApi(ApiMethodNames.CancelMeeting, Params)
                            .then(Response => {
                                this.setState({ ResponseData: Response.Data[0] },
                                    () => {
                                        if (this.state.ResponseData != undefined) {
                                            this.setState({
                                                Result: this.state.ResponseData.data,
                                            }, () => {
                                                this.forceUpdate();
                                            })
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
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>My Meeting</Text>
                    </View>
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center' }}>
                        <IconFA name="qrcode" size={25} style={{ right: 5, position: 'absolute', color: 'white', alignItems: 'flex-end', justifyContent: 'center' }} />
                    </TouchableOpacity>
                </View>
                <View style={[{ bottom: 20, right: 10, zIndex: 10, width: 55, height: 55, position: 'absolute', flexDirection: 'row' }]} >

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Exhibitors") }} style={{ flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'center', backgroundColor: '#0056a6', alignItems: 'center', borderRadius: 90, }}>
                        <Icon style={{ color: 'white', fontSize: 15, paddingRight: 0 }} name={"plus"} />
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 2, width: '96%', height: 45, marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0056a6' }}>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}>
                        Meeting Scheduled
                                    </Text>
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


                            {this.state.Result.length > 0 &&

                                (this.state.Result.map((val, ind) => {
                                    return (
                                       <View key={ind} style={{ marginVertical: 10, borderStyle: 'solid', borderColor: '#28A9E1', borderWidth: 2, padding: 4, width: '98%', marginHorizontal: '1%', height: 'auto', backgroundColor: 'white' }}>
                                            <View style={{ width: '100%', height: 'auto', borderBottomColor: 'black', borderStyle: 'solid', borderBottomWidth: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '25%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', fontWeight: 'bold', paddingVertical: 5, paddingLeft: 10 }}>Company :</Text>
                                                </View>
                                                <View style={{ width: '75%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', paddingVertical: 5, paddingLeft: 10, color: 'black', opacity: 0.5 }}>{val.company} </Text>
                                                </View>
                                            </View>

                                            <View style={{ width: '100%', height: 'auto', borderBottomColor: 'black', borderStyle: 'solid', borderBottomWidth: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '25%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', fontWeight: 'bold', paddingVertical: 5, paddingLeft: 10 }}>Hall No :</Text>
                                                </View>
                                                <View style={{ width: '75%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', paddingVertical: 5, paddingLeft: 10, color: 'black', opacity: 0.5 }}>{val.hall} </Text>
                                                </View>
                                            </View>

                                            <View style={{ width: '100%', height: 'auto', borderBottomColor: 'black', borderStyle: 'solid', borderBottomWidth: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '25%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', fontWeight: 'bold', paddingVertical: 5, paddingLeft: 10 }}>Date :</Text>
                                                </View>
                                                <View style={{ width: '75%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', paddingVertical: 5, paddingLeft: 10, color: 'black', opacity: 0.5 }}>{val.Date} </Text>
                                                </View>
                                            </View>

                                            <View style={{ width: '100%', height: 'auto', borderBottomColor: 'black', borderStyle: 'solid', borderBottomWidth: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '25%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', fontWeight: 'bold', paddingVertical: 5, paddingLeft: 10 }}>Time :</Text>
                                                </View>
                                                <View style={{ width: '75%', height: 'auto', }}>
                                                    <Text style={{ textAlign: 'left', paddingVertical: 5, paddingLeft: 10, color: 'black', opacity: 0.5 }}>{val.Time} </Text>
                                                </View>
                                            </View>


                                            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={this.CancelMeeting.bind(this, val)} style={{ backgroundColor: '#28A9E1', width: '50%', height: 30, borderRadius: 5, justifyContent: 'center', alignItems: 'center', borderStyle: 'solid', borderColor: '#28A9E1', borderWidth: 2, }}>
                                                    <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>
                                                        Cancel Meeting
                                            </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                }))

                            }
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
});

