import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ToastAndroid, Image, ActivityIndicator, NetInfo, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { CommonMethods } from '../Helper/CommonMethods';
import { SessionManager } from '../Helper/SessionsManager';
import { ApiMethodNames, ErrorMessages, ResponseCodes, ResponseStatus } from '../Helper/GenericConstants';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLoder: false,
            password: '',
            email: '',
            name: '',
            rePassword: ''
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <IconFA name="sign-in" size={25} style={{ color: tintColor, paddingTop: 12, justifyContent: 'center' }} />
        )
    }

    Register() {
        if(this.state.password!=this.state.rePassword){
            ToastAndroid.show("Password does't Mathced" , ToastAndroid.LONG);
        }
        else{

        var Params = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
        }
        if (Params.email == "") {
            ToastAndroid.show("Enter Email", ToastAndroid.LONG);

        }
        else if (Params.name == "") {
            ToastAndroid.show("Enter Name", ToastAndroid.LONG);

        }
        else if (Params.password == "") {
            ToastAndroid.show("Enter Password", ToastAndroid.LONG);

        }
        else {

            console.log("Params", Params);
            this.setState({
                ShowLoder: true
            }, () => {
                NetInfo.isConnected.fetch().then(
                    isConnected => {
                        if (isConnected) {
                            CommonMethods.CallGETApi(ApiMethodNames.Registeruser, Params)
                                .then(Response => {
                                    console.log("Response", Response.Data[0]);
                                    this.setState({ ResponseData: Response.Data[0] },
                                        () => {
                                            if (this.state.ResponseData != undefined && this.state.ResponseData.flag == 2) {
                                                this.setState({
                                                    Result: this.state.ResponseData,
                                                    email: '',
                                                    password: '',
                                                    name: '',
                                                    rePassword: ''
                                                }, () => {
                                                    console.log("this.state.Result", this.state.Result);
                                                    ToastAndroid.show("Registration Successful", ToastAndroid.LONG);
                                                    this.forceUpdate();
                                                })
                                            }
                                            else if (this.state.ResponseData.flag == 1) {
                                                ToastAndroid.show("Email Already Exist", ToastAndroid.LONG);
                                            }
                                            else if (this.state.ResponseData.flag == 3) {
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
    }
    }
    render() {
        return (
            <View style={styles.ParentContainer}>

                <View style={{ flexDirection: 'row', width: '100%', height: 55, justifyContent: 'center', backgroundColor: '#28A9E1' }}>
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center' }}>
                        <IconMI onPress={() => { this.props.navigation.goBack() }} name="arrow-back" size={25} style={{ left: 5, position: 'absolute', color: 'white', alignItems: 'flex-start', justifyContent: 'center' }} />
                    </TouchableOpacity>

                    <View style={{ width: '80%', justifyContent: 'center', }}>
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Registration </Text>
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

                            <View style={{ width: '98%', height: 320, backgroundColor: '#E6F1F1', justifyContent: 'center', alignItems: 'center', marginHorizontal: '2%', marginTop: 20 }}>
                                <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                        <IconMCI style={{ color: '#28A9E1', fontSize: 20 }} name={'email'} />
                                    </View>
                                    <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextInput
                                            style={{ height: 40, width: '100%', }}
                                            onChangeText={(text) => { this.setState({ email: text, }) }}
                                            placeholder="Email Id"
                                            placeholderTextColor="#9e9e9e"
                                            value={this.state.email}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                        <IconMI style={{ color: '#28A9E1', fontSize: 20 }} name={'person'} />
                                    </View>
                                    <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextInput
                                            style={{ height: 40, width: '100%', }}
                                            onChangeText={(text) => { this.setState({ name: text, }) }}
                                            placeholder="User Name"
                                            placeholderTextColor="#9e9e9e"
                                            value={this.state.name}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                        <IconFA style={{ color: '#28A9E1', fontSize: 20 }} name={'key'} />
                                    </View>
                                    <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextInput
                                            style={{ height: 40, width: '100%', }}
                                            onChangeText={(text) => { this.setState({ password: text, }) }}
                                            placeholder=" Password"
                                            secureTextEntry={true}  
                                            placeholderTextColor="#9e9e9e"
                                            value={this.state.password}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                        <IconFA style={{ color: '#28A9E1', fontSize: 20 }} name={'key'} />
                                    </View>
                                    <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                        <TextInput
                                            style={{ height: 40, width: '100%', }}
                                            onChangeText={(text) => { this.setState({ rePassword: text, }) }}
                                            placeholder="Re Type Password"
                                            secureTextEntry={true}  
                                            placeholderTextColor="#9e9e9e"
                                            value={this.state.rePassword}
                                        />
                                    </View>
                                </View>

                                <View style={{ marginTop: 10, width: '100%', height: 55, justifyContent: 'center', alignItems: 'center', }}>

                                    <TouchableOpacity onPress={this.Register.bind(this)} style={[{ width: '50%', height: 40, borderColor: '#28A9E1', borderStyle: 'solid', borderWidth: 2, marginTop: 5, margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }]}>
                                        <Text style={{ fontSize: 16, color: '#28A9E1', textAlign: 'center' }} >
                                            Register Now
                                        </Text>
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
        // backgroundColor: '#E6F1F1',
        backgroundColor: 'white',
    },
    MainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
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


