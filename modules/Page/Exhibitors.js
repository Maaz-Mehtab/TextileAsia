import React, { Component } from 'react';
import { Platform,NetInfo, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, FlatList, ToastAndroid, ActivityIndicator } from 'react-native';
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
    }
    componentWillMount() {
       
        this.Exhibitor();
    }

    Exhibitor() {
    var Params = {
    }
    this.setState({
      ShowLoder: true
  }, () => {
    NetInfo.isConnected.fetch().then(
      isConnected => {
       if (isConnected) {
            CommonMethods.CallGETApi(ApiMethodNames.Exhibitor, Params)
           .then(Response => {
            this.setState({ ResponseData: Response.Data[0].data },
                        () => {
                            if (this.state.ResponseData != undefined) {
                                this.setState({ ExhibitorData: this.state.ResponseData, }, () => {
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


    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <IconEn name="chat" size={25} style={{ color: tintColor, paddingTop: 10, justifyContent: 'center' }} />
        )
    }
    render() {
        var ExhibitorData=[];
        ExhibitorData=this.state.ExhibitorData;
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
                <View style={{ width: '100%', height: 'auto', backgroundColor: '#1B759A', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomColor: '#28A9E1', borderStyle: 'solid', borderBottomWidth: 1 }}>
                        <View style={{ width: '12%', margin: '1%', height: 38, justifyContent: 'center', alignItems: 'center', borderRightColor: 'white', borderStyle: 'solid', borderRightWidth: 2 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>S.No</Text>
                        </View>
                        <View style={{ width: '52%', margin: '1%', height: 38, justifyContent: 'center', alignItems: 'center', borderRightColor: 'white', borderStyle: 'solid', borderRightWidth: 2, }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Company Name</Text>
                        </View>
                        <View style={{ width: '32%', margin: '1%', height: 38, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Country</Text>
                        </View>
                    </View>
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
                                {ExhibitorData!= []  &&
                                    <FlatList
                                        style={{ width: '100%' }}
                                        keyExtractor={(item, index) => index}
                                        data={ExhibitorData}
                                        ref={(ref) => {
                                            this.ListView_Ref = ref;
                                        }}
                                        ItemSeparatorComponent={this.ListViewItemSeparator}
                                        removeClippedSubviews={false}
                                        renderItem={({ item, index }) => {
                                            return (
                                              
                                                <TouchableOpacity key={index} onPress={()=>this.props.navigation.navigate("CompanyDetail",{data :item})} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomColor: '#28A9E1', borderStyle: 'solid', borderBottomWidth: 1 }}>
                                                    <View style={{ width: '12%', margin: '1%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRightColor: '#28A9E1', borderStyle: 'solid', borderRightWidth: 1 }}>
                                                        <Text style={{ textAlign: 'center',fontSize:12 }}>{index + 1}</Text>
                                                    </View>
                                                    <View style={{ width: '52%', margin: '1%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRightColor: '#28A9E1', borderStyle: 'solid', borderRightWidth: 1 }}>
                                                        <Text style={{ textAlign: 'center', fontSize:12}}>{item.company}</Text>
                                                    </View>
                                                    <View style={{ width: '32%', margin: '1%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRightColor: '#28A9E1', borderStyle: 'solid', borderRightWidth: 1 }}>
                                                        <Text style={{ textAlign: 'center',fontSize:12 }}>{item.country}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                
                                            )
                                        }}
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
});

