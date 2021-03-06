import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";


export default class Chat extends Component {
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
            <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Chat</Text>
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
              <View style={{ backgroundColor: 'white', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: '50%', height: '100%', borderBottomColor: 'black', borderBottomWidth: 2, borderStyle: 'solid', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                    MY CONNECTIONS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '50%', height: '100%', borderBottomColor: 'white', borderBottomWidth: 2, borderStyle: 'solid', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', opacity: 0.5, textAlign: 'center' }}>
                    REQUEST
                    </Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 10, width: '98%', marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', width: '90%', height: 40, justifyContent: 'center', alignItems: 'center', borderStyle: 'solid', borderColor: 'black', borderWidth: 1 }}>
                  <View style={{ width: '10%' }}>
                    <Icon name="search1" size={16} style={{ paddingLeft: 10, color: 'black', opacity: 0.5, justifyContent: 'center', alignItems: 'flex-start' }} />
                  </View>
                  <View style={{ width: '80%' }}>
                    <TextInput
                      style={{ fontSize: 13, width: '100%', paddingLeft: 10, paddingTop: 10, justifyContent: 'center' }}
                      onChangeText={(text) => { this.setState({ text: text, }) }}
                      placeholder="Search "
                      placeholderTextColor="#C7C7C7"
                      value={this.state.text}
                    />
                  </View>
                  <View style={{ width: '10%' }}>
                    <IconEn name="circle-with-cross" size={16} style={{ color: 'black', opacity: 0.5, justifyContent: 'center', alignItems: 'flex-start' }} />
                  </View>
                </View>
              </View>
              {(this.state.display.map((val, ind) => {
                return (
                  <View key={ind} style={{ marginTop: 10, borderRadius: 5, flexDirection: 'row', width: '98%', marginHorizontal: '2%', height: 'auto', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '20%', height: 70, justifyContent: 'center', alignItems: 'flex-start' }}>
                      <Image style={{ width: '100%', height: '85%', justifyContent: 'center', alignItems: 'flex-start' }} source={val.Image} />
                    </View>
                    <View style={{ width: '65%', justifyContent: 'center', height: 'auto', }}>
                      <Text style={{ padding: 4, paddingLeft: 5, fontSize: 12, color: 'black' }}>{val.name}</Text>
                      <Text style={{ paddingLeft: 5, fontSize: 10, color: 'black', opacity: 0.5, maxHeight: 37 }}>{val.message}</Text>
                    </View>
                    <View style={{ width: '15%', height: 'auto', justifyContent: 'center', }}>
                      <Text style={{ fontSize: 9, color: 'black', opacity: 0.5 }}>{val.msgTime}</Text>
                    </View>
                  </View>
                )
              }))}

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

