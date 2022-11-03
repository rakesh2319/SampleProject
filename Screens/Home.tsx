import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Image,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface p{
  navigation:any
}
export class Home extends Component<p> {
  constructor(props: any) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FCC80F'}}>
        <StatusBar backgroundColor="yellow" />
        <ImageBackground
          source={require('../Assets/bgimage.jpeg')}
          style={styles.welcomeimage}>
          <View style={styles.ViewMain}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: 'center',
              }}>
              Welcome
            </Text>
            <View style={styles.googleView}>
              <TouchableOpacity
                style={styles.googleb}
                //onPress={()=>this.props.navigation.navigate('Signin')}
              >
                <MaterialCommunityIcons
                  name="google"
                  size={20}
                  style={styles.googleicon}
                  color="#003D8E"
                />
                <Text style={styles.googleT}>Sign in with Google</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.accountB}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.accountT}>Create an account</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <Text style={styles.AlreadyaccountT}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signin')}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewMain: {
    // flex: 0.5,
    marginHorizontal: 45,
  },
  WelcomeT: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  seamlessT: {
    color: 'white',
    fontSize: 18,
  },
  manageT: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
  },
  welcomeimage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    marginTop: 65,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  googleView: {
    flexDirection: 'row',
    //alignSelf: 'center',
  },
  googleb: {
    backgroundColor: 'white',
    width: 300,
    marginTop: 45,
    borderRadius: 15,
  },
  googleT: {
    color: '#003D8E',
    textAlign: 'center',
    bottom: 12,
    fontWeight: 'bold',
    fontSize: 17,
  },
  googleicon: {
    top: 10,
    marginLeft: 10,
  },
  accountB: {
    width: 300,
    marginTop: 45,
    borderRadius: 15,
    alignSelf: 'center',
    height: 40,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  accountT: {
    color: 'white',
    textAlign: 'center',
    top: 6,
    fontSize: 17,
  },
  AlreadyaccountT: {
    color: 'white',
  },
});
export default Home;
