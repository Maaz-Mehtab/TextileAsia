import React, { Component } from 'react';
import { Platform,NetInfo, StyleSheet, ActivityIndicator,Text, View, ScrollView, Image, TouchableOpacity, TextInput,ToastAndroid } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from 'react-native-vector-icons/MaterialIcons';
import { CommonMethods } from '../Helper/CommonMethods';
import { SessionManager } from '../Helper/SessionsManager';
import { ApiMethodNames, ErrorMessages, ResponseCodes, ResponseStatus } from '../Helper/GenericConstants';


export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Result:[],
            ShowLoder: false,
            company: '',
            personname: '',
            country: '',
            city: '',
            designation: '',
            phone: '',
            email: '',
            web: '',
            address: '',
        }
        this.submit=this.submit.bind(this);
    }
    submit() {
       
        if (this.state.company == "") {
            ToastAndroid.show(" Enter Company Name", ToastAndroid.LONG)
        }
        else if (this.state.email == "") {
            ToastAndroid.show("Enter  Email ", ToastAndroid.LONG)
        }
        else if (this.state.country == "") {
            ToastAndroid.show("Enter Country Name ", ToastAndroid.LONG)
        }
        else if (this.state.phone == "") {
            ToastAndroid.show("Enter Phone Number ", ToastAndroid.LONG)
        }
        else if (this.state.city == "") {
            ToastAndroid.show("Enter City Name ", ToastAndroid.LONG)
        }
        else if (this.state.designation == "") {
            ToastAndroid.show("Enter Designation ", ToastAndroid.LONG)
        }


        else if (this.state.web == "") {
            ToastAndroid.show("Enter Web Address ", ToastAndroid.LONG)
        }
        else if (this.state.personname == "") {
            ToastAndroid.show("Enter Contact Person Name ", ToastAndroid.LONG)
        }
        else if (this.state.address == "") {
            ToastAndroid.show("Enter Address ", ToastAndroid.LONG)
        }
        else {
            // console.log("all Right")
            let obj = {
                company:this.state.company,
                contactpersonname:this.state.personname,
                country:this.state.country,
                city:this.state.city,
                designation:this.state.designation,
                phone:this.state.phone,
                email:this.state.email,
                web:this.state.web,
                address:this.state.address
            }
            // console.log("obj",obj);
            this.Registration(obj)
        }
    }

    Registration(obj) {
        // console.log("obj",obj)
        var Params = {
            organization:obj.company,
            name:obj.contactpersonname,
            designation:obj.designation,
            address:obj.address,
            city:obj.city,
            country:obj.country,
            number:obj.phone,
            email:obj.email,
            web:obj.web 
        }
        // console.log("Params",Params);
        this.setState({
          ShowLoder: true
      }, () => {
      
        NetInfo.isConnected.fetch().then(
          isConnected => {
           if (isConnected) {
                CommonMethods.CallGETApi(ApiMethodNames.VisitorRegister, Params)
               .then(Response => {
                        console.log("Response", Response.Data[0]);
                        console.log("Response", Response.Data[0].Result);
      
                        this.setState({ ResponseData: Response.Data[0] },
                            () => {
                                if (this.state.ResponseData != undefined) {
                                    this.setState({ Result: this.state.ResponseData.Result,
                                        company:'',
                                        personname:'',
                                        country:'',
                                        city:'',
                                        designation:'',
                                        phone:'',
                                        email:'',
                                        web:'',
                                        address:''
                                    }, () => {
                                        console.log("this.state.VisitorData", this.state.Result);
                                        ToastAndroid.show(this.state.Result, ToastAndroid.LONG);
                                        this.forceUpdate();
                                    })
                                }
                                else
                                    ToastAndroid.show(this.state.Result, ToastAndroid.LONG);
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
            <IconFa5 name="bookmark" size={25} style={{ color: tintColor, paddingTop: 12, justifyContent: 'center' }} />
        )
    }
    render() {
        return (
            <View style={styles.ParentContainer}>

                <View style={{ flexDirection: 'row', width: '100%', height: 55, justifyContent: 'center', backgroundColor: '#28A9E1' }}>
                    <View style={{ width: '80%', justifyContent: 'center', }}>
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Visitor Registration </Text>
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
                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconFA style={{ color: '#28A9E1', fontSize: 25 }} name={'users'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ company: text, }) }}
                                        placeholder="Company Name"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.company}
                                    />
                                </View>
                            </View>

                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconMI style={{ color: '#28A9E1', fontSize: 25 }} name={'person'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ personname: text, }) }}
                                        placeholder="Contact Person Name"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.personname}
                                    />
                                </View>
                            </View>

                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconFa5 style={{ color: '#28A9E1', fontSize: 25 }} name={'city'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ country: text, }) }}
                                        placeholder="Country"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.country}
                                    />
                                </View>
                            </View>

                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconFa5 style={{ color: '#28A9E1', fontSize: 25 }} name={'city'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ city: text, }) }}
                                        placeholder="City"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.city}
                                    />
                                </View>
                            </View>

                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconFa5 style={{ color: '#28A9E1', fontSize: 25 }} name={'city'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ designation: text, }) }}
                                        placeholder="Designation"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.designation}
                                    />
                                </View>
                            </View>

                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconFA style={{ color: '#28A9E1', fontSize: 25 }} name={'mobile-phone'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ phone: text, }) }}
                                        keyboardType='numeric'
                                        placeholder="Phone No"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.phone}
                                    />
                                </View>
                            </View>



                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconMCI style={{ color: '#28A9E1', fontSize: 25 }} name={'email'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ email: text, }) }}
                                        placeholder="Email"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.email}
                                    />
                                </View>
                            </View>


                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconMCI style={{ color: '#28A9E1', fontSize: 25 }} name={'web'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ web: text, }) }}
                                        placeholder="Web Address"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.web}
                                    />
                                </View>
                            </View>
                            <View style={{ width: '98%', height: 40, flexDirection: 'row', marginTop: 10, backgroundColor: 'white', margin: 5, borderRadius: 5, justifyContent: 'center' }}>
                                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', }}>
                                    <IconMI style={{ color: '#28A9E1', fontSize: 25 }} name={'location-on'} />
                                </View>
                                <View style={{ width: '82%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ height: 40, width: '100%', }}
                                        onChangeText={(text) => { this.setState({ address: text, }) }}
                                        placeholder="Address"
                                        placeholderTextColor="#9e9e9e"
                                        value={this.state.address}
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', height: 55, justifyContent: 'center', alignItems: 'center' }}>

                                <TouchableOpacity onPress={this.submit} style={[styles.ThemeColorYellow, { width: '60%', height: 40, borderColor: '#28A9E1', borderStyle: 'solid', borderWidth: 2, marginTop: 10, margin: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={{ fontSize: 16, color: '#28A9E1', textAlign: 'center' }} >
                                        Submit
                                    </Text>

                                </TouchableOpacity>
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
});


