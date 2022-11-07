import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../ZomatoScreens/SplashScreen';
import LoginPage from '../ZomatoScreens/LoginPage';

const Stack=createNativeStackNavigator()
export class AuthStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}/>
            <Stack.Screen
            name='LoginPage'
            component={LoginPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default AuthStack