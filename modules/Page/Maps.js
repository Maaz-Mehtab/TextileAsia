/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,Dimensions, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import IconFa5 from "react-native-vector-icons/FontAwesome5";
import IconEn from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";
import IconSLI from "react-native-vector-icons/SimpleLineIcons";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import MapView, { Marker, Circle } from 'react-native-maps';
import geolib from 'geolib';
const screenheight = Dimensions.get('window').height;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLoder: false,

      Location: [
        { LocationId: 1, LocationName: "Expo Center", Latitude: 24.9207, Longitude: 67.0882, Radius: 700 },
        { LocationId: 2, LocationName: "E-Commerce Gateway Head office", Latitude: 24.876007, Longitude: 67.072913, Radius: 400 },
        { LocationId: 3, LocationName: "E-Commerce Pvt Ltd", Latitude: 24.880635, Longitude: 67.064138, Radius: 300 },
      ],

      initialLocation: {
        latitude: 24.891016,
        longitude: 67.062326,
        latitudeDelta: 0.1001,
        longitudeDelta: 0.1003,
      },
    }
    this.GetUserLocation = this.GetUserLocation.bind(this);
  }
  onRegionChange(region) {
    this.setState({ region });
  }

  componentWillMount() {
    this.GetUserLocation();
  }
  GetUserLocation() {

    navigator.geolocation.getCurrentPosition(
      (position) => {

        var NewLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.0941,
          longitudeDelta: 0.0001,
        }
        console.log(NewLocation);
        this.setState({ initialLocation: NewLocation, IsLocationFound: true }, () => {
          console.log("user Current Location", this.state.initialLocation);
          this._map.animateToRegion(NewLocation, 2000)
        })
      },
      (error) => {

        this.setState({ IsLocationFound: false }, () => {
          alert(error.message);
        })
      },
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 });
  }
  render() {
    let ApiMarker = []
    ApiMarker = this.state.Location;

    return (
      <View style={styles.ParentContainer}>

        <View style={{ flexDirection: 'row', width: '100%', height: 55, justifyContent: 'center', backgroundColor: '#28A9E1' }}>
          <View style={{ width: '80%', justifyContent: 'center', }}>
            <Text style={{ alignItems: 'flex-start', color: 'white', fontSize: 20, paddingLeft: 5 }}>Google Map</Text>
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
              <View style={{ marginTop: 20, width: '98%',marginHorizontal:'2%', height: screenheight-110, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <MapView
                  style={styles.Map}
                  region={this.state.initialLocation}
                  showsUserLocation={true}
                  followsUserLocation={true}
                  ref={(ref) => this._map = ref}
                  provider='google'
                // onRegionChange={region => this.setState({ initialLocation: region })} 
                >
                  {ApiMarker.length > 0 &&
                    <View>
                      {(ApiMarker.map((val, ind) => {
                        return (
                          <MapView.Circle
                            key={ind}
                            center={{
                              latitude: val.Latitude,
                              longitude: val.Longitude
                            }}
                            radius={val.Radius}
                            strokeWidth={2}
                            strokeColor="#3399ff"
                            fillColor="#e0f4d9"
                          />
                        )
                      }))}

                    </View>
                  }

                  {
                    ApiMarker.map((marker, i) => {

                      return (
                        <Marker
                          key={i}
                          coordinate={{
                            latitude: marker.Latitude,
                            longitude: marker.Longitude
                          }}
                          title={marker.LocationName}
                        />
                      )
                    })
                  }
                </MapView>


              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  Map: {
    height: '100%',
    width: '100%'
  },
  Marker: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
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
