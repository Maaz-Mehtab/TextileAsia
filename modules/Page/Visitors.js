import React, { Component } from 'react';
import { Platform, NetInfo, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, FlatList, ToastAndroid, ActivityIndicator } from 'react-native';
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



export default class Exhibitors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowLoder: false,
            text: '',
            VisitrorData: [],
            display: [
                { id: 1, name: 'Maaz Mehtab', Image: require("../images/user2.jpg"), message: 'Textile Asia Trade Exhibition is the ', msgTime: '1 hour ago', },
                { id: 1, name: 'Wahaj ur Rehmen', Image: require("../images/user1.png"), message: 'Textile Asia Trade Exhibition is the ', msgTime: '3 hour ago', },
                { id: 1, name: 'Ahmed Raza', Image: require("../images/user3.jpg"), message: 'Textile Asia Trade Exhibition is the ', msgTime: '4 April 2019', },
            ],
        }
        this.page = 2;
    }
    componentWillMount() {

        this.Visitor();
    }

    Visitor() {
        this.page = this.page + 1;
        var Params = {
            offset: this.page
        }
        this.setState({
            ShowLoder: true
        }, () => {
            console.log("ShowLoder", this.state.ShowLoder);
            NetInfo.isConnected.fetch().then(
                isConnected => {
                    if (isConnected) {
                        CommonMethods.CallGETApi(ApiMethodNames.Visitor, Params)
                            .then(Response => {
                                console.log("Response", Response.Data[0].data);

                                this.setState({ ResponseData: Response.Data[0].data },
                                    () => {
                                        if (this.state.ResponseData != undefined) {
                                            this.setState({ VisitrorData: this.state.ResponseData }, () => {
                                                console.log("this.state.VisitrorData", this.state.VisitrorData);
                                                this.forceUpdate();
                                            })
                                        }
                                        else
                                            ToastAndroid.show(ErrorMessages.NoFoundData, ToastAndroid.LONG);
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

    Render_Footer = () => {
        return (
            <View style={styles.footerStyle}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.TouchableOpacity_style}
                    onPress={this.Visitor.bind(this)}
                >
                    <Text style={styles.TouchableOpacity_Inside_Text}>Load More </Text>
                    {
                        (this.state.fetching_Status)
                            ?
                            <ActivityIndicator color="#fff" style={{ marginLeft: 6 }} />
                            :
                            null
                    }
                </TouchableOpacity>
            </View>
        )
    }


    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#000',
                }}
            />
        );
    };

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <IconEn name="chat" size={25} style={{ color: tintColor, paddingTop: 10, justifyContent: 'center' }} />
        )
    }
    render() {
        var VisitrorData = [];
        VisitrorData = this.state.VisitrorData;
        return (
            <View style={styles.ParentContainer}>

                <View style={{ flexDirection: 'row', width: '100%', height: 55, justifyContent: 'center', backgroundColor: '#28A9E1' }}>
                    <View style={{ width: '80%', justifyContent: 'center', }}>
                        <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Exhibitors</Text>
                    </View>
                    <TouchableOpacity style={{ width: '10%', justifyContent: 'center' }}>
                        <IconFA name="qrcode" size={25} style={{ right: 5, position: 'absolute', color: 'white', alignItems: 'flex-end', justifyContent: 'center' }} />
                    </TouchableOpacity>


                </View>

                {this.state.ShowLoder == true &&
                    <View style={styles.ActivityLoder}>
                        <ActivityIndicator style={[styles.centering, { height: 80 }]}
                            size="large" />
                    </View>
                }
                <ScrollView style={styles.ScrollContainer}>
                    <View style={styles.MainContainer}>
                        <View style={styles.FormContainer} >


                            <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                {VisitrorData != [] &&
                                    <FlatList
                                        style={{ width: '100%' }}
                                        keyExtractor={(item, index) => index}
                                        data={VisitrorData}
                                        ref={(ref) => {
                                            this.ListView_Ref = ref;
                                        }}
                                        ItemSeparatorComponent={this.ListViewItemSeparator}
                                        removeClippedSubviews={false}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View key={index} style={{ marginTop: 10, borderRadius: 5, flexDirection: 'row', width: '98%', marginHorizontal: '2%', height: 'auto', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{ width: '20%', height: 70, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                        <Image style={{ width: '85%', height: '85%', borderRadius: 90, justifyContent: 'center', alignItems: 'flex-start' }} source={require("../images/user3.jpg")} />
                                                    </View>
                                                    <View style={{ width: '65%', justifyContent: 'center', height: 'auto', }}>
                                                        <Text style={{ padding: 4, paddingLeft: 5, fontSize: 12, color: 'black' }}>{item.name}</Text>
                                                        <Text style={{ paddingLeft: 5, fontSize: 10, color: 'black', opacity: 0.5, maxHeight: 37 }}>{item.organization}</Text>
                                                    </View>
                                                    <TouchableOpacity style={{ width: '15%', height: 'auto', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                        <IconEn name="add-user" size={20} style={{ paddingRight: 30, color: '#28A9E1', justifyContent: 'center', alignItems: 'flex-start' }} />
                                                    </TouchableOpacity>
                                                </View>

                                            )
                                        }}
                                        ListFooterComponent={this.Render_Footer}
                                    />


                                }

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
    footerStyle:
    {
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        // borderTopWidth: 2,
        // borderTopColor: '#009688'
    },

    TouchableOpacity_style:
    {
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F44336',
        borderRadius: 5,
        backgroundColor: '#4267b2'
    },
    TouchableOpacity_Inside_Text:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15
    },
});

