import React, { Component } from 'react';
import { Platform, StyleSheet, NetInfo,FlatList,Text, View, ScrollView, Image, TouchableOpacity ,ToastAndroid,ActivityIndicator} from 'react-native';
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

export default class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLoder: false,
      VisitorData:'',
      ExhibitorData:'',
    }
  }
  componentWillMount() {
    // this.Visitor();
    // this.Exhibitor();
    this.Count();
}


Count() {
  var Params = {
  }
  this.setState({
    ShowLoder: true
}, () => {
    console.log("ShowLoder", this.state.ShowLoder);
  NetInfo.isConnected.fetch().then(
    isConnected => {
     if (isConnected) {
          CommonMethods.CallGETApi(ApiMethodNames.Count, Params)
         .then(Response => {
                  console.log("Response", Response.Data[0]);

                  this.setState({ ResponseData: Response.Data[0] },
                      () => {
                          if (this.state.ResponseData != undefined) {
                              this.setState({ VisitorData: this.state.ResponseData.data[0].id,ExhibitorData:this.state.ResponseData.data1[0].id }, () => {
                                  console.log("this.state.VisitorData", this.state.VisitorData);
                                  console.log("this.state.ExhibitorData", this.state.ExhibitorData);
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


// Exhibitor() {
//     var Params = {
//     }
//     this.setState({
//       ShowLoder: true
//   }, () => {
//       console.log("ShowLoder", this.state.ShowLoder);
//     NetInfo.isConnected.fetch().then(
//       isConnected => {
//        if (isConnected) {
//             CommonMethods.CallGETApi(ApiMethodNames.Exhibitor, Params)
//            .then(Response => {
//                     console.log("Response", Response.Data[0].data);

//                     this.setState({ ResponseData: Response.Data[0].data },
//                         () => {
//                             if (this.state.ResponseData != undefined) {
//                                 this.setState({ ExhibitorData: this.state.ResponseData, }, () => {
//                                     console.log("this.state.ExhibitorData", this.state.ExhibitorData);
//                                     this.forceUpdate();
//                                 })
//                             }
//                             else
//                                 ToastAndroid.show(ErrorMessages.NoFoundData, ToastAndroid.LONG);
//                             this.setState({
//                                 ShowLoder: false
//                             });
//                         }
//                     )
//                 }
//                 );
//         }
//         else {
//             ToastAndroid.show("Network Connection Failed please Connect the Internet", ToastAndroid.LONG);
//             this.setState({
//                 ShowLoder: false
//             });
//         }

//     })
//   })

// }


  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <IconEn name="menu" size={25} style={{ color: tintColor, paddingTop: 10, justifyContent: 'center' }} />
    )
  }
  render() {
    // console.log("this.state.VisitorData[0].id;",this.state.VisitorData[0]);
    var visitorCount , ExhibitorCount;
    visitorCount=this.state.VisitorData;
    ExhibitorCount=this.state.ExhibitorData;
    return (
      <View style={styles.ParentContainer}>
        {this.state.ShowLoder ==true &&
          <View style={styles.ActivityLoder}>
            <ActivityIndicator style={[styles.centering, { height: 80 }]}
              size="large" />
          </View>
        }
        <ScrollView style={styles.ScrollContainer}>
          <View style={styles.MainContainer}>
            <View style={styles.FormContainer} >
              <View style={{ width: '100%', height: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: '#28A9E0' }}>
                <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
                  <View style={{ width: '25%', height: '100%', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ width: 60, justifyContent: 'center', alignItems: 'center', height: 60, backgroundColor: '#019885', borderRadius: 60, left: 20, borderColor: '#016B83', borderWidth: 2, borderStyle: 'solid' }}>
                      <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, }}>M</Text>
                    </View>
                  </View>
                  <View style={{ width: '50%', height: '100%', justifyContent: 'center', }}>
                    <Text style={{ paddingLeft: 5, fontSize: 14, color: 'white' }}>Maaz Mehtab</Text>
                    <Text style={{ paddingLeft: 5, opacity: 0.6, fontSize: 14, color: 'white' }}>Application Developer</Text>
                  </View>

                  <TouchableOpacity style={{ width: '20%', height: '100%', alignItems: "flex-end" }}>
                    <Icon name="edit" size={25} style={{ color: 'white', paddingTop: 10, justifyContent: 'center' }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ backgroundColor: '#1B759A', width: '100%', height: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("EventInfo")} style={{ marginHorizontal: '7%', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderRadius: 90, borderColor: 'white', borderStyle: 'solid', borderWidth: 2 }}>
                  <IconFa5 name="info" size={20} style={{ color: 'white', justifyContent: 'center' }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginHorizontal: '7%', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderRadius: 90, borderColor: 'white', borderStyle: 'solid', borderWidth: 2 }}>
                  <IconFA name="bell" size={20} style={{ color: 'white', justifyContent: 'center' }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginHorizontal: '7%', justifyContent: 'center', alignItems: 'center', width: 40, height: 40, borderRadius: 90, borderColor: 'white', borderStyle: 'solid', borderWidth: 2 }}>
                  <Icon name="setting" size={20} style={{ color: 'white', justifyContent: 'center' }} />
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center', }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Mymeeting")}  style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconFa5 name="calendar-plus" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>My Meeting</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Topic")}  style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <Icon name="clockcircle" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Topics</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Exhibitors')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconFa5 name="dumpster" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Exhibitors</Text>
                  <Text style={{ paddingRight: 15,right:5,position:'absolute', color: 'black', fontSize: 16,textAlign:'right' }}>{ExhibitorCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Visitors")} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconII name="md-person" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Visitors</Text>
                  <Text style={{ paddingRight: 15,right:5,position:'absolute', color: 'black', fontSize: 16,textAlign:'right' }}>{visitorCount}</Text>
              
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconSLI name="badge" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Badge</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Maps")} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconMCI name="google-maps" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Map</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Partner")} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconFa5 name="hands-helping" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Partner</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("FloorPlan")} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconMCI name="floor-plan" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Floor Plan</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Organizer")} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconEn name="yelp" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Organizer </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconEn name="share" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Invite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 55, borderStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                  <IconFA name="feed" size={25} style={{ paddingLeft: 10, color: '#00135d', justifyContent: 'center' }} />
                  <Text style={{ paddingLeft: 15, color: 'black', fontSize: 16, }}>Feed</Text>
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

