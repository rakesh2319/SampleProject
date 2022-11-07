import { Alert, BackHandler, Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import asyncstorage from '@react-native-async-storage/async-storage';
let screenWidth = Dimensions.get('window').width;

interface p {
  props: any
  navigation: any
}
interface s {

}
export default class DashBoard extends Component<p, s> {
  constructor(props: any) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick = () => {
    Alert.alert('Exit', 'Are you sure want to exit the app? ', [
      {
        text: 'OK',
        onPress: () => {
          BackHandler.exitApp()
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

    return true;
  };

  componentWillUnmount = async () => {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  };
  logout = () => {
    Alert.alert('Logout?', 'Are you sure want to Logout the app? ', [
      {
        text: 'OK',
        onPress: () => {
          this.props.navigation.navigate("Login")
          asyncstorage.removeItem('token');
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);


  }
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/Splash2.png')}
          resizeMode='stretch'
          style={{ width: '100%', height: '100%', }} >
          <View style={{

          }}>
            <TouchableOpacity
              onPress={() => this.logout()}
              style={{
                backgroundColor: "#1B3E07", justifyContent: "center", flex: 1,
                alignItems: 'center', height: "100%", borderRadius: 10,
                marginTop: 30, flexDirection: 'row',
                borderWidth: 1,
                borderColor: "#1B3E07",
                minHeight: 55,
                maxHeight: 55,
                right: 15, position: 'absolute'
              }}>
              <Text style={{ color: "white", fontWeight: "bold", padding: 15 }}>
                Logout
              </Text>
            </TouchableOpacity>

          </View>

        </ImageBackground >
      </View>
    )
  }
}