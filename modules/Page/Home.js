import React, { Component } from 'react';
// import {tintColor} from '../Style/Constant';
import { Platform, StyleSheet, Text, View, ScrollView, Image,ToastAndroid,Alert, TouchableOpacity, BackHandler, BackAndroid } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconEI from "react-native-vector-icons/EvilIcons";
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLoder: false,
      DaysRemain: '',
    }
    console.disableYellowBox = true;
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload => {
      BackHandler.addEventListener('hardwareBackPress', this.backAndroid)
      this.forceUpdate();
    }
    );
  }

  backAndroid = () => {
    const { clickedPosition } = this.state;
    setTimeout(() => {
      this.setState({
        clickedPosition: 0
      });
    }, 2000);
    if (((clickedPosition === 1) && (this.props.navigation.isFocused()))) {
      Alert.alert(
        'Exit Application',
        'Do you want to quit application?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
        }], {
          cancelable: false
        }
      );
    } else {
      ToastAndroid.showWithGravity(
        'Press again to exit',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      this.setState({
        clickedPosition: 1
      })
    }
    return true
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
      BackHandler.removeEventListener('hardwareBackPress', this.backAndroid)
      // this.updateMenuState(false);
    }
    );
  }

  componentWillMount() {
    this.RemainingDays();
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={25} style={{ color: tintColor, paddingTop: 10, justifyContent: 'center' }} />
    )
  }

  RemainingDays() {
    var myBirthday, today, bday, diff, days;
    myBirthday = [26, 3]; // 6th of February
    today = new Date();
    bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
    if (today.getTime() > bday.getTime()) {
      bday.setFullYear(bday.getFullYear() + 1);
    }
    diff = bday.getTime() - today.getTime();
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.setState({
      DaysRemain: days
    })

  }

  render() {
    return (
      <View style={styles.ParentContainer}>
        <View style={[{ bottom: 20, right: 10, zIndex: 10, width: 55, height: 55, position: 'absolute', flexDirection: 'row' }]} >

          <TouchableOpacity onPress={() => { this.props.navigation.navigate("Registration") }} style={{ flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'center', backgroundColor: '#0056a6', alignItems: 'center', borderRadius: 90, }}>
            <Icon style={{ color: 'white', fontSize: 15, paddingRight: 0 }} name={"plus"} />
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
              <View style={{ flex: 1, width: '100%', height: 180 }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../images/Header.jpg')} />
              </View>

              <View style={{ width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 210, borderRadius: 10, alignItems: 'center' }}>
                <View style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, color: 'black' }}>
                    Textile Asia
                  </Text>
                </View>
                <View style={{ width: '100%', height: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', opacity: 0.5 }}>
                    Karachi Pakistan
                  </Text>
                </View>
                <View style={{ width: '100%', height: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ borderRadius: 10, width: '20%', height: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2CA2DB' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 14, color: 'white' }}>
                      {this.state.DaysRemain}
                    </Text>
                  </View>
                </View>
                <View style={{ width: '100%', height: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ textAlign: 'center', fontSize: 14, color: '#2CA2DB', }}>
                    Days to go
                  </Text>
                </View>
                <View style={{ width: '100%', height: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', opacity: 0.5 }}>
                    26 - 28 Mar 2019
                  </Text>
                </View>


                <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 2, borderBottomWidth: 1, borderBottomColor: 'black', opacity: 0.3, borderStyle: 'solid' }}></View>
                <View style={{ width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 90, backgroundColor: '#2CA2DB' }}>
                    <Icon name="check" size={25} style={{ color: 'white', justifyContent: 'center', }} />
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 90, backgroundColor: '#2CA2DB' }}>
                    <Icon name="check" size={25} style={{ color: 'white', justifyContent: 'center', }} />
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 90, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 1, borderColor: '#787878', }}>

                    <IconEI name="pointer" size={35} style={{ color: '#787878', justifyContent: 'center', }} />
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 90, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 1, borderColor: '#787878', }}>
                    <Icon name="staro" size={25} style={{ color: '#787878', justifyContent: 'center', }} />
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 90, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 1, borderColor: '#2CA2DB', }}>
                    <Icon name="sharealt" size={25} style={{ color: '#2CA2DB', justifyContent: 'center', }} />
                  </View>
                </View>
                <View style={{ width: '100%', height: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 20, backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 11, opacity: 0.5, color: 'black', textAlign: 'center' }}>Following</Text>
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 20, backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 11, opacity: 0.5, color: 'black', textAlign: 'center' }}>Attending</Text>
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 20, backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 11, opacity: 0.3, color: 'black', textAlign: 'center' }}>Check in</Text>
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 20, backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 11, opacity: 0.3, color: 'black', textAlign: 'center' }}>Review</Text>
                  </View>
                  <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: 'center', width: 50, height: 20, backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 11, opacity: 0.5, color: 'black', textAlign: 'center' }}>Invite</Text>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: 5, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 160, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ width: '100%', height: 35, }}>
                  <Text style={{ fontWeight: '200', fontSize: 18, paddingTop: 5, color: '#2CA2DB', paddingLeft: 10 }}>Topics</Text>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', height: 60, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ width: '20%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, width: '100%', }}>
                      <Text style={{ fontSize: 13, color: 'black', opacity: 0.5 }}>10:00 AM</Text>
                    </View>
                    <View style={{ flex: 1, width: '100%', }}>
                      <Text style={{ fontSize: 13, color: 'black', opacity: 0.5 }}>10:00 AM</Text>
                    </View>
                  </View>

                  <View style={{ marginLeft: 10, width: '55%', height: '100%', justifyContent: 'center', borderLeftWidth: 1, borderLeftColor: 'red', borderStyle: 'solid' }}>
                    <Text style={{ fontSize: 13, color: 'black', opacity: 0.5, paddingLeft: 10 }}>21 st Textile Aisa 2019</Text>
                    <Text style={{ fontSize: 13, color: 'black', opacity: 0.5, paddingLeft: 10 }}>Show Opens</Text>
                    <Text style={{ fontSize: 13, color: 'black', opacity: 0.3, paddingLeft: 10 }}>Congress Center</Text>

                  </View>

                  <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="clockcircleo" size={40} style={{ color: '#2CA2DB', justifyContent: 'center', alignItems: 'center' }} />

                  </View>
                </View>
                <TouchableOpacity style={{ marginTop: 10, width: '100%', borderBottomStartRadius: 5, borderBottomEndRadius: 5, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2CA2DB' }}>
                  <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>Show Full Topic</Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 5, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 160, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#2CA2DB', fontSize: 16, textAlign: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>698</Text>  Member
                  </Text>
                </View>

                <View style={{ width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                  <View style={{ marginHorizontal: '1%', width: 60, height: 60, borderRadius: 90, borderColor: '#2CA2DB', borderStyle: 'solid', borderWidth: 1 }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 90 }} source={require('../images/user1.png')} />
                  </View>
                  <View style={{ marginHorizontal: '1%', width: 60, height: 60, borderRadius: 90, borderColor: '#2CA2DB', borderStyle: 'solid', borderWidth: 1 }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 90 }} source={require('../images/user2.jpg')} />
                  </View>
                  <View style={{ marginHorizontal: '1%', width: 60, height: 60, borderRadius: 90, borderColor: '#2CA2DB', borderStyle: 'solid', borderWidth: 1 }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 90 }} source={require('../images/user3.jpg')} />
                  </View>
                  <View style={{ marginHorizontal: '1%', width: 60, height: 60, borderRadius: 90, borderColor: '#2CA2DB', borderStyle: 'solid', borderWidth: 1 }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 90 }} source={require('../images/user1.png')} />
                  </View>
                  <View style={{ marginHorizontal: '1%', width: 60, height: 60, borderRadius: 90, borderColor: '#2CA2DB', borderStyle: 'solid', borderWidth: 1 }}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 90 }} source={require('../images/user2.jpg')} />
                  </View>
                </View>

                <TouchableOpacity style={{ marginTop: 10, width: '100%', borderBottomStartRadius: 5, borderBottomEndRadius: 5, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2CA2DB' }}>
                  <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>Start Networking</Text>
                </TouchableOpacity>

              </View>

              <View style={{ marginTop: 5, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 220, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ width: '100%', height: 30, justifyContent: 'center' }}>
                  <Text style={{ color: '#2CA2DB', fontSize: 18, textAlign: 'left', paddingLeft: 10 }}>
                    About Event
                  </Text>
                </View>
                <View style={{ width: '100%', height: 180, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 13, color: 'black', opacity: 0.5, textAlign: 'justify', padding: 4 }}>
                    Textile Asia Trade Fair is the most promising and enduring biannual Textile Industry Show in Pakistan
                   to be hel at Karachi Expo Center & Lohore Expo Center. The Trade Fairs aims to focus on the immense buying selling potential of textile
                    & garment machinery , Clothing Textiles Accessories, Textile Raw Material  Supplies , Textile Dyes Chemicals , Embroidery Machines,
                    Power & Air Compressors for Textile Industry and Textile Allied  Services. The Trade Fair is being organized at the most opportune time when the
                    government is looking forword to modernize and upgrade the textile sector of the country for the better quality products and echanced productivity.
                 </Text>
                </View>
              </View>

              <View style={{ marginTop: 5, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 80, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ width: '100%', height: 25, }}>
                  <Text style={{ color: '#2CA2DB', fontSize: 16, textAlign: 'left', paddingLeft: 10 }}>
                    Timings
                  </Text>
                </View>
                <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                  <View style={{ width: '35%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 13, color: 'black', opacity: 0.5 }}>
                      26-28 March 2019
                        </Text>
                  </View>
                  <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  </View>
                  <View style={{ width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 13, color: 'black', opacity: 0.5 }}>
                      10:00 Am - 7:00 PM
                        </Text>
                    <Text style={{ textAlign: 'center', fontSize: 13, color: 'black', opacity: 0.5 }}>
                      BUSINESS
                        </Text>
                  </View>
                </View>
              </View>

              <View style={{ marginBottom: 5, marginTop: 5, width: '98%', marginHorizontal: '2%', backgroundColor: 'white', height: 80, borderRadius: 5, alignItems: 'center' }}>
                <View style={{ width: '100%', height: 25, }}>
                  <Text style={{ color: '#2CA2DB', fontSize: 16, textAlign: 'left', paddingLeft: 10 }}>
                    Facts and Figures
                  </Text>
                </View>
                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                  <View style={{ marginLeft: 10, width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', opacity: 0.5 }}>
                      Est. Exhibitor
                        </Text>
                  </View>
                  <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  </View>
                  <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', opacity: 0.5 }}>
                      550
                    </Text>
                  </View>
                </View>
                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                  <View style={{ marginLeft: 10, width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', opacity: 0.5 }}>
                      Est. Attendance
                        </Text>
                  </View>
                  <View style={{ width: '55%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  </View>
                  <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', opacity: 0.5 }}>
                      65000
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
