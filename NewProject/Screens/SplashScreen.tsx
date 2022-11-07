import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image, TouchableOpacity, Alert, ActivityIndicator, ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import WelcomeScreen from './WelcomeScreen';
import asyncstorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

interface Props {
  navigation: any
}

interface s {
  isVisible: boolean
  isLoggedIn: boolean
}
export default class SplashScreen extends Component<Props, s>
{
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: true,
      isLoggedIn: false
    }
    setTimeout(() => {
      this.props.navigation.navigate(
        this.state.isLoggedIn ? "BottomTabNavigator" : "WelcomeScreen")
    }, 3000);
  }
  

componentDidMount() {
  this.getToken()
}
getToken = async () => {
  let token = await asyncstorage.getItem('token');

  if (token) {
    console.log(token, "first")
    this.setState({ isLoggedIn: true })
  }
  else {
    console.log(token, "Nologin")
    this.setState({ isLoggedIn: false })
  }
};

  render() {
    let Splash_Screen = (
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
               <Image style={{width:300, height:250}}
               source={require('../assets/Logo.png')} />
      </View>)
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
      }}>
        <Image source={require('../assets/Logo.png')} />
      </View>
    )
  }
}
const styles = StyleSheet.create(
  {
  
  });  