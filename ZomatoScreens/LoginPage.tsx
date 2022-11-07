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
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export class LoginPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '<848650508945-qsss5gjue07h8pks82kfm8mpa8kfekm9.apps.googleusercontent.com>', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId:
        '<848650508945-qsss5gjue07h8pks82kfm8mpa8kfekm9.apps.googleusercontent.com>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    this.IsSignedIn(), [];
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due..', userInfo);
      this.setState({user: userInfo});
    } catch (err) {
      console.log('error', err.message);
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (err.code === statusCodes.IN_PROGRESS) {
        console.log('signed in');
      } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available');
      } else {
        console.log('some other error happened');
      }
    }
  };

  IsSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    //this.setState({isLoginScreenPresented: !isSignedIn});
    if (!!isSignedIn) {
      this.getCurrentUserInfo();
    } else {
      console.log('please login');
    }
  };

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('edit', userInfo);
      this.setState({user: userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('user has not signed in yet');
      } else {
        console.log('some other error');
      }
    }
  };

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
            <TouchableOpacity //onPress={this.IsSignedIn}
            >
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
            </TouchableOpacity>

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
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            //color={GoogleSigninButton.Color.Dark}
            onPress={this.IsSignedIn}
            //disabled={this.state.isSigninInProgress}
          />
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
