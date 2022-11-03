import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AuthStack from './navigation/AuthStack'

export class App extends Component {
  render() {
    return (
     <AuthStack/>
    )
  }
}

export default App