import { Text, View,StatusBar } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

import {appMainBlue,appMainBlueDark, appMainBackgroundColor} from './modules/Style/Constant'
import Home from './modules/Page/Home';
import Feeds from './modules/Page/Feeds';
import Chat from './modules/Page/Chat';
import Bookmarks from './modules/Page/Bookmarks';
import More from './modules/Page/More';
import SplashScreen from './modules/Page/SplashScreen';
import Maps from './modules/Page/Maps';
import Topic from './modules/Page/Topic';
import Exhibitors from './modules/Page/Exhibitors';
import Visitors from './modules/Page/Visitors';
import Partner from './modules/Page/Partner';
import FloorPlan from './modules/Page/FloorPlan';
import Organizer from './modules/Page/Organizer';
import EventInfo from './modules/Page/EventInfo';
import CompanyDetail from './modules/Page/CompanyDetail';
import Registration from './modules/Page/Registration';
import Login from './modules/Page/Login';
import Register from './modules/Page/Register';
import Mymeeting from './modules/Page/Mymeeting';
import MeetingForm from './modules/Page/MeetingForm';
import { SessionManager } from './modules/Helper/SessionsManager';


const AppTabNavigator = createMaterialTopTabNavigator({
  Home: Home,
  Feeds: Feeds,
  Chat: Chat ,
  Login: Login ,
  More: More ,
}
,{
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 12,
    },
    
    activeTintColor: '#29398E',
    inactiveTintColor: '#888391',
    style: {
      // backgroundColor: appMainBlue,
    },
    indicatorStyle :{
      backgroundColor: 'white'
    },
    tabStyle:{
      justifyContent:'center',
      height: 50,
      alignItem:'center'
    },
    style: {
      backgroundColor:'white',
      justifyContent:'center',
      height: 50,
      alignItem:'center'
    }
  }
}
);


// ----------------- stack navigator ---------------
const MainNavigator = createStackNavigator({
  splash: {screen: SplashScreen, navigationOptions: { header: null } },
  navigator: {screen: AppTabNavigator , navigationOptions:{header: null}},
  MeetingForm: {screen: MeetingForm, navigationOptions: { header: null } },
  Registration: {screen: Registration, navigationOptions: { header: null } },
  CompanyDetail: {screen: CompanyDetail, navigationOptions: { header: null } },
  EventInfo: {screen: EventInfo, navigationOptions: { header: null } },
  Organizer: {screen: Organizer, navigationOptions: { header: null } },
  Maps: {screen: Maps, navigationOptions: { header: null } },
  Topic: {screen: Topic, navigationOptions: { header: null } },
  Exhibitors: {screen: Exhibitors, navigationOptions: { header: null } },
  Visitors: {screen: Visitors, navigationOptions: { header: null } },
  Partner: {screen: Partner, navigationOptions: { header: null } },
  FloorPlan: {screen: FloorPlan, navigationOptions: { header: null } },
  Register: {screen: Register, navigationOptions: { header: null } },
  Mymeeting: {screen: Mymeeting, navigationOptions: { header: null } },
});


const Apps = createAppContainer(MainNavigator);
// --------------------

class App extends React.Component {
  
  render() { 
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle='light-content' backgroundColor={appMainBlue}></StatusBar>
      <Apps></Apps>
    
      </View>
    );
  }
}

export default App;

