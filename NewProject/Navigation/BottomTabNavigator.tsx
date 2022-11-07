import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from '../Screens/DashBoard'


const Stack = createNativeStackNavigator();

export default class BottomTabNavigator extends Component {
  
  render() {
    return (
     
     
      <Stack.Navigator>
            <Stack.Screen name= "DashBoard" component = {DashBoard} options={{ headerShown: false }}/>
        </Stack.Navigator>
     
    )
  }
}