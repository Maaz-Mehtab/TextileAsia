import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";



export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLoder: false,
      display: [
        { id: 1, name: 'Wahaj ur Rehmen', Image: require("../images/user1.png"), message: 'Textile Asia Trade Exhibition is the most promising and enduring biannual Textile Industry Show in Pakistan to be held at Karachi Expo Centre & Lahore Expo Centre. The Exhibition aims to focus on the immense buying selling potential of textile & garment machinery, Clothing Textiles Accessories, Textile Raw Material Supplies, Textile Dyes Chemicals, Embroidery Machines, Power & Air Compressors for Textile Industry and Textile Allied Services. The event is being organized at the most opportune time when the government is looking forward to modernize and upgrade the textile sector of the country for the better quality products and enhanced productivity ', postTime: '1 hour ago', like: 17, comment: 10 },
        { id: 2, name: 'Maaz Mehtab', Image: require("../images/user2.jpg"), message: 'Gateway to the new era digitized machines  & unique technologies.', postTime: '3 hour ago', like: 22, comment: 4 },
        { id: 3, name: 'Ahmed Raza ', Image: require("../images/user3.jpg"), message: 'Gateway to the new era digitized machines  & unique technologies.', postTime: '5 hour ago', like: 9, comment: 2 },
      ],
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <IconMCI name="newspaper" size={25} style={{ color: tintColor, paddingTop: 10, justifyContent: 'center' }} />

    )
  }
  render() {
    return (
      <View style={styles.ParentContainer}>

        <View style={{ flexDirection: 'row', width: '100%', height: 55, justifyContent: 'center', backgroundColor: '#28A9E1' }}>
          <View style={{ width: '80%', justifyContent: 'center', }}>
            <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Feed</Text>
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

              {(this.state.display.map((val,ind)=>{
                return(
                  <View key={ind} style={{marginBottom:5, width: '98%', marginHorizontal: '2%', height: 'auto', borderRadius: 5, backgroundColor: 'white' }}>
                  <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
                    <View style={{ width: '15%', height: 'auto', justifyContent: 'center',marginLeft:10, }}>
                      <Image style={{ width: '100%', height: 50, borderRadius: 90, paddingLeft: 30 }} source={val.Image}/>
                    </View>
                    <View style={{ width: '85%', height: 'auto', justifyContent: 'center' }}>
                      <Text style={{ paddingLeft: 5, color: 'black', fontSize: 14, }}>{val.name}</Text>
                      <Text style={{ paddingLeft: 5, color: 'black', fontSize: 10, opacity: 0.5 }}>{val.postTime} </Text>
                    </View>
                  </View>
                  <View style={{ width: '100%', height: 'auto', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'auto', color: 'black', opacity: 0.6, fontSize: 13, padding: 6 }}>
                      {val.message}
                      </Text>
                  </View>
  
                  <View style={{ width: '100%', height: 'auto', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <View style={{ width: '20%', height: 'auto', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      <Text style={{ padding: 4, fontSize: 12, color: 'black', opacity: 0.5 }}>{val.like} Likes</Text>
                    </View>
                    <View style={{ width: '27%', height: 'auto', justifyContent: 'center', alignItems: 'flex-end' }}>
                      <Text style={{ padding: 4, fontSize: 12, color: 'black', opacity: 0.5 }}>{val.comment} Comments</Text>
                    </View>
                  </View>
  
                  <View style={{ width: '100%', height: 45, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '33%', height: 'auto', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <Icon name="like1" size={18} style={{paddingTop:6, color: '#28A9E1', alignItems: 'flex-end', justifyContent: 'center' }} />
                      <Text style={{ padding: 6, color: '#28A9E1', justifyContent:'center' }}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', width: '33%', height: 'auto', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <IconFa5 name="comment-alt" size={15} style={{paddingTop:2, color: 'black',opacity:0.5, alignItems: 'flex-end', justifyContent: 'center' }} />
                      <Text style={{ padding: 6, color: 'black', opacity: 0.6 ,justifyContent:'center'}}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',width: '33%', height: 'auto', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                     <IconEn name="forward" size={20} style={{paddingBottom:5, color: 'black',opacity:0.5, alignItems: 'flex-end', justifyContent: 'center' }} />
                      <Text style={{ padding: 6, color: 'black', opacity: 0.6,justifyContent:'center' }}>Share</Text>
                    </TouchableOpacity>
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

