import { BackHandler, Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

let screenWidth = Dimensions.get('window').width;

interface p {
  props: any
  navigation: any
}
interface s {

}
export default class WelcomeScreen extends Component<p, s> {
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
  BackHandler.exitApp()
    return true;
};

componentWillUnmount = async () => {
    BackHandler.removeEventListener(
        "hardwareBackPress",
        this.handleBackButtonClick
    );
};
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/Splash2.png')}
          resizeMode='stretch'
          style={{ width: '100%', height: '100%', }} >
          <View style={{ marginHorizontal: 20,  justifyContent:'center',bottom:50, position:'absolute'}}>
            <View style={{
              marginTop: 30, flexDirection: 'row',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#1B3E07",
              minHeight: 55,
              width: screenWidth - (40),
              flex: 1,
              justifyContent: "center",
              alignItems: 'center',
              maxHeight:55
            }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Signup")}
                style={{
                  backgroundColor: "#1B3E07", justifyContent: "center", flex: 1,
                  alignItems: 'center', height: "100%", borderRadius: 10,
                }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Register
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
                style={{
                  justifyContent: "center", flex: 1,
                  alignItems: 'center', height: "100%", borderRadius: 10,
                }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground >
      </View>
    )
  }
}