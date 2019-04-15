import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";


export default class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLoder: false,
            text: '',
            display: [
                { id: 1, name: 'Maaz Mehtab', Image: require("../images/user2.jpg"), message: 'Textile Asia Trade Exhibition is the ', msgTime: '1 hour ago', },
                { id: 1, name: 'Wahaj ur Rehmen', Image: require("../images/user1.png"), message: 'Textile Asia Trade Exhibition is the ', msgTime: '3 hour ago', },
                { id: 1, name: 'Ahmed Raza', Image: require("../images/user3.jpg"), message: 'Textile Asia Trade Exhibition is the ', msgTime: '4 April 2019', },
            ],
        }
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
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Event Info</Text>
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
                            <View style={{ width: '98%', height: 130, backgroundColor: 'white', marginHorizontal: '2%', }}>
                                <View style={{ flexDirection: 'row', width: '98%', height: 80, backgroundColor: 'white', marginHorizontal: '2%', }}>
                                    <View style={{ marginTop: 20, marginLeft: 10, width: '30%', height: 60 }}>
                                        <Image style={{ width: '100%', height: '100%' }} source={require('../images/TextileLogo.png')} />
                                    </View>
                                    <View style={{ marginTop: 20, marginLeft: 10, width: '50%', height: 60 }}>
                                        <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 5, paddingTop: 10 }}>Textile Asia</Text>
                                        <Text style={{ fontSize: 14, color: 'black', opacity: 0.5, paddingHorizontal: 5 }}>Karachi ,Pakistan</Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: 50, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold', fontStyle: 'italic', color: '#28A9E1' }}>
                                        "South Aisa's Largest Bi-annual Textile Industry Trade Fair"
                                    </Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 10, width: '98%', marginHorizontal: '2%', height: 'auto', backgroundColor: 'white', }}>
                                <View style={{ width: '100%', height: 30, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 10, paddingTop: 5 }}>Description</Text>
                                </View>
                                <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginVertical: 2 }}>
                                    <Text style={{ fontSize: 13, color: 'black', opacity: 0.5, textAlign: 'justify', paddingVertical: 2, paddingHorizontal: 5 }}>
                                        Textile Aisa Trade Fair is the most promoting and enduring biannual Textile Industry Show in Pakistan to
                                        be held at Karachi Expo Center & Lahore Expo Center. The Teade fair aims to focus on the immense buying selling potenstial of textile &
                                        of textile & garment machinery,Clothing Textiles Accessories, Textile Raw Material supplies,
                                        Textile Dyes Chemical, Embroidery Machines, Power & Ari Compressors for Textile Industry and Textile Allied Services.
                                        The Trade Fair is being organized at the most opportune time when the government is looking forword to modernize and upgrade
                                        the textile sector of the country for the better quality products and enhanced productivity.
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '98%', height: 150, marginHorizontal: '2%', backgroundColor: 'white', marginVertical: '2%', justifyContent: 'center' }}>
                                <View style={{ marginLeft: 10, width: '100%', height: 35, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black', paddingTop: 8 }}>
                                        Highlights
                                    </Text>
                                </View>
                                <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ marginLeft: 5, width: '3%', height: 11, backgroundColor: '#28A9E1', marginTop: 8, borderRadius: 90 }}></View>
                                    <View style={{ width: '93%', marginHorizontal: '2%', height: '100%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 14, color: 'black', opacity: 0.5 }}>
                                            21st Edition of South Asia's Largest Bi-annial Textile Industry Fair.
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ marginLeft: 5, width: '3%', height: 11, backgroundColor: '#28A9E1', marginTop: 8, borderRadius: 90 }}></View>
                                    <View style={{ width: '93%', marginHorizontal: '2%', height: '100%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 14, color: 'black', opacity: 0.5 }}>
                                            More 65,000 visitors will visit in three days for the exhibition.
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ marginLeft: 5, width: '3%', height: 11, backgroundColor: '#28A9E1', marginTop: 8, borderRadius: 90 }}></View>
                                    <View style={{ width: '93%', marginHorizontal: '2%', height: '100%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 14, color: 'black', opacity: 0.5 }}>
                                            More 550 exhibitors from 27 countries will display latest Machinery , Products, Technology & Research.
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 90, }}>
                                <View style={{ marginLeft: 10, width: '96%', height: 35, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>
                                        Timing
                                    </Text>
                                </View>

                                <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                                    <View style={{ width: '35%', height: '100%', alignItems: 'flex-start' }}>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, padding: 5 }}>
                                            26-28 Mar 2019
                                        </Text>
                                    </View>
                                    <View style={{ width: '27%', height: '100%', alignItems: 'flex-end' }}></View>
                                    <View style={{ width: '38%', height: '100%', alignItems: 'flex-end' }}>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, paddingTop: 5, paddingHorizontal: 5 }}>
                                            10:00 AM - 7:00 PM
                                        </Text>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, padding: 1, paddingHorizontal: 5 }}>
                                            BUSINESS
                                        </Text>
                                    </View>

                                </View>
                            </View>

                            <View style={{ marginTop: 5, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 125, }}>
                                <View style={{ marginLeft: 10, width: '96%', height: 30, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>
                                        Event Industry
                                    </Text>
                                </View>
                                <View style={{ marginLeft: 10, width: '96%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 14, color: 'black', paddingLeft: 10, paddingTop: 0, }}>
                                        Tradeshow
                                    </Text>
                                </View>
                                <View style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, width: '45%', height: 25, borderRadius: 10, backgroundColor: 'gray', opacity: 0.5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, opacity: 0.5, color: 'black', paddingLeft: 4, paddingTop: 0, }}>
                                        #Apparel & Clothing
                                    </Text>
                                </View>
                                <View style={{marginBottom: 10,marginLeft: 10, width: '35%', height: 25, borderRadius: 10, backgroundColor: 'gray', opacity: 0.5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, opacity: 0.5, color: 'black', paddingLeft: 4, paddingTop: 0, }}>
                                        #Power & Energy
                                    </Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 5,marginBottom:10, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 80 }}>
                                <View style={{ marginLeft: 10, width: '96%', height: 30, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>
                                        Fact and Figures
                                    </Text>
                                </View>
                                <View style={{ width: '100%', height: 25, justifyContent: 'center', flexDirection: 'row' }}>
                                    <View style={{ width: '45%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, }}>
                                            Est. Exhibitors
                                        </Text>
                                    </View>
                                    <View style={{ width: '45%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, }}>
                                            550+
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: 25, justifyContent: 'center', flexDirection: 'row' }}>
                                    <View style={{ width: '45%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, }}>
                                            Est. Attendees
                                        </Text>
                                    </View>
                                    <View style={{ width: '45%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Text style={{ color: 'black', opacity: 0.5, fontSize: 13, }}>
                                            65000+
                                        </Text>
                                    </View>
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
});

