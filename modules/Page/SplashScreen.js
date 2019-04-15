import React, { Component } from 'react';
import { Platform, StyleSheet, Styles, Image,ActivityIndicator, TouchableOpacity, Alert, NetInfo, Button, Text, View } from 'react-native';
// import { appMainBlue } from '../assets/Constants';
import { appMainBlue } from '../Style/Constant';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionInfo: null,
            lat: '',
            long: '',
            splash: true
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ splash: false })
        }, 3000);
    }

    render() {

        if (this.state.splash == false) {
            this.props.navigation.navigate('navigator')
        }
        return (
            <View style={styles.main}>

                <Image style={styles.mainApp} source={require('../images/Header.jpg')}
                />

                <ActivityIndicator  color="#0056a6" style={[styles.centering, ]}
                    size="large" />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainApp: {
        //   flex: 1,
        resizeMode: 'contain',
        backgroundColor: 'white',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        height: '60%',
        width: '98%',

        //   fontSize: 100, 
        //   fontWeight: 'bold',
    }
})