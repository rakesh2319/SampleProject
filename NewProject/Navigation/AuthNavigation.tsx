import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import DashBoard from '../Screens/DashBoard'
import WelcomeScreen from '../Screens/WelcomeScreen';
import Cal from '../Screens/Cal';
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator();

export default class AuthNavigation extends Component {
  
  render() {
    return (
     
     <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name= "SplashScreen" component = {SplashScreen} options={{ headerShown: false }}/>
            <Stack.Screen name ="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name ="Signup" component={Signup} options={{ headerShown: false }}/>
            <Stack.Screen name ="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name ="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
     </NavigationContainer>
    )
  }
}