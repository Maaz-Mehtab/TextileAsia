import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";


export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLoder: false,
    }
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
            <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>My Favourite</Text>
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


