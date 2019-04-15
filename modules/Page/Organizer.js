import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";


export default class Organizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLoder: false,
            text: '',
            display: [
                { id: 1, name: 'Uzair Nizam', Image: require("../images/user3.jpg"), email: 'uzair.nizam@ecgateway.net' },
                { id: 2, name: 'Umair Nizam', Image: require("../images/user3.jpg"), email: 'umiar.nizam@ecgateway.net' },
                { id: 3, name: 'Farhan Anees', Image: require("../images/user3.jpg"), email: 'farhat.anees@ecgateway.net' },
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
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Organizer</Text>
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

                            <View style={{ marginTop: 5, width: '98%', height: 225, marginHorizontal: '2%', backgroundColor: 'white' }}>
                                <View style={{ width: '100%', height: 120,marginLeft:10 }}>
                                    <Image style={{ width: '50%', height: '100%' }} source={require('../images/logo3.png')} />
                                </View>
                                <View style={{ width: '100%', height: 120, justifyContent: 'center',marginLeft:10 }}>
                                    <Text style={{ color: 'black', padding: 3, fontSize: 14 }}>
                                        Ecommerce Gateway Pakistan (Pvt) Ltd
                                    </Text>
                                    <Text style={{ color: 'black', opacity: 0.5, padding: 2, fontSize: 11 }}>
                                        8, Kokan Society , Dr Azhar Hussian Road off:
                                    </Text>
                                    <Text style={{ color: 'black', opacity: 0.5, padding: 2, fontSize: 11 }}>
                                        Shaheed-e-Millat Road
                                    </Text>
                                    <Text style={{ color: 'black', opacity: 0.5, padding: 2, fontSize: 11 }}>
                                        Karachi , Pakistan
                                    </Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 10, width: '100%', marginHorizontal: '2%', backgroundColor: 'white', height: 300 }}>
                                <View style={{ width: '100%', height: 50, }}>
                                    <Text style={{ padding: 5, color: 'black', fontSize: 18 }}>
                                        Event Contacts
                                    </Text>
                                </View>
                                {(this.state.display.map((val, ind) => {
                                    return (
                                        <View key={ind} style={{ marginBottom: 5, width: '100%', height: 'auto', flexDirection: 'row' }}>
                                            <View style={{ width: '17%', marginLeft: 10, height: 60 }}>
                                                <Image style={{ width: '100%', height: '100%', borderRadius: 90 }} source={val.Image} />
                                            </View>
                                            <View style={{ width: '80%', height: 55 }}>
                                                <Text style={{ fontSize: 15, color: 'black', paddingHorizontal: 10, paddingTop: 5 }}>
                                                   {val.name}
                                        </Text>
                                                <Text style={{ fontSize: 10, color: 'darkblue', paddingHorizontal: 10, textDecorationLine: 'underline' }}>
                                                  {val.email}
                                        </Text>
                                            </View>
                                        </View>
                                    )
                                }))}


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

