import {Text, View, Image, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import asyncStorage from '@react-native-async-storage/async-storage';

interface p {
  navigation: any;
}
interface s {
  isLoggedin: any;
}
export class SplashScreen extends Component<p, s> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
    setTimeout(() => {
      this.props.navigation.navigate(
        this.state.isLoggedin ? 'Dashboard' : 'Home',
      );
    }, 1000);
  }
  componentDidMount() {
    this.getToken();
  }

  getToken = async () => {
    let token = await asyncStorage.getItem('Token');
    if (token) {
      this.setState({isLoggedin: true});
    } else {
      this.setState({isLoggedin: false});
    }
  };
  render() {
    return (
      <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
        <Image
          source={require('../Assets/online.png')}
          style={{height: "100%",width:"100%"}}
        />
      </View>
    );
  }
}

export default SplashScreen;
