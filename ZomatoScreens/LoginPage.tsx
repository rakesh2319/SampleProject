import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';

export class LoginPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 0.4}}>
          <Image
            source={require('../Assets/zomatolog.jpg')}
            style={styles.topimage}
          />
        </View>
        <View style={{flex: 0.6, marginTop: 25}}>
          <Text style={styles.indiaT}>India's #1 Food Delivery</Text>
          <Text style={styles.indiaT}>and Dining App</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                flex: 1,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingHorizontal: 5,
                fontSize: 14,
              }}>
              Log in or sign up
            </Text>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                flex: 1,
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.6,
              width: '60%',
              height: '10%',
              alignSelf: 'center',
              marginTop: 15,
              borderRadius: 10,
              borderColor: 'grey',
            }}>
            <Text style={{marginTop: 15, marginLeft: 5}}>+91</Text>
            <TextInput
              placeholder="Enter mobile number"
              style={{marginLeft: 10}}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity style={styles.continueB}>
            <Text style={styles.continueT}>Continue</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              alignSelf: 'center',
              marginTop: 25,
            }}>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                flex: 1,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingHorizontal: 5,
                fontSize: 14,
              }}>
              or
            </Text>
            <View
              style={{
                backgroundColor: 'grey',
                height: 1,
                flex: 1,
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            <Image
              source={require('../Assets/googleicon.png')}
              style={{
                height: 30,
                width: 30,
                backgroundColor: 'white',
                borderRadius: 8,
                borderWidth: 0.2,
              }}
            />
            <Image
              source={require('../Assets/AppleLogo.png')}
              style={{
                height: 27,
                width: 27,
                backgroundColor: 'white',
                borderRadius: 8,
                borderWidth: 0.2,
              }}
            />
            <Image
              source={require('../Assets/threeDots.png')}
              style={{
                height: 27,
                width: 27,
                backgroundColor: 'white',
                borderRadius: 8,
                borderWidth: 0.2,
              }}
            />
          </View>
          <Text style={styles.agreeT}>By continuing, you agree to our</Text>
          <Text style={styles.TermsT}>
            Terms of service Privacy Policy Content Policies
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topimage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  indiaT: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  continueB: {
    marginTop: 15,
    backgroundColor: '#F7434B',
    marginHorizontal: 20,
    height: '8%',
    borderRadius: 10,
  },
  continueT: {
    textAlign: 'center',
    flex: 1,
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  agreeT: {
    textAlign: 'center',
    marginTop: 100,
  },
  TermsT: {
    textAlign: 'center',
    marginTop: 10,
    color: 'grey',
  },
});
export default LoginPage;
