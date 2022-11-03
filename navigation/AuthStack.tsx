import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from '../Screens/Home'
import Signin from '../Screens/Signin'
import Signup from '../Screens/Signup'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
export class AuthStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen1'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }} />
          <Stack.Screen
            name='Signin'
            component={Signin}
            options={{ headerShown: false }} />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default AuthStack