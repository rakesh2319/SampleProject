import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import asyncstorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageBackground } from 'react-native';

interface p {
  navigation: any;
}
interface s {
  email: any;
  password: any;
}
export class Signin extends Component<p, s> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#FCC80F'}}>
          <View style={styles.container}>
            <StatusBar backgroundColor= '#FCC80F'/>
            <ImageBackground
          source={require('../Assets/bgimage.jpeg')}
          style={styles.welcomeimage}>
            <View style={styles.flex1}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={25}
                  style={styles.arrow}
                  color="white"
                  onPress={() => this.props.navigation.navigate('Home')}
                />
              </TouchableOpacity>
              <Text style={styles.signinH}>Sign in</Text>
            </View>
            <View style={styles.flex2}>
              <View style={{marginHorizontal: 35}}>
                <Text style={styles.welcomeH}>Welcome Back</Text>
                <Text style={{color: 'grey', marginTop: 5}}>
                  Hello there sign in to continue
                </Text>
                <Text style={{marginTop: 20, color: 'grey', fontWeight: '600'}}>
                  Email
                </Text>
                <View style={styles.placeholderV}>
                  <TextInput
                    placeholder="Enter email"
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}
                    placeholderTextColor="lightgrey"
                    style={styles.placeholder}
                  />
                </View>
                <Text style={{marginTop: 20, color: 'grey', fontWeight: '600'}}>
                  Password
                </Text>
                <View style={styles.placeholderV}>
                  <TextInput
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                    placeholderTextColor="lightgrey"
                    // backgroundColor="#F1FAFF"
                    style={styles.placeholder}
                  />
                  <TouchableOpacity
                    style={styles.eye}
                    // onPress={() =>
                    //   this.setState({
                    //     passwordVisible: !this.state.passwordVisible,
                    //   })}
                  >
                    <MaterialCommunityIcons
                      name={'eye'}
                      size={25}
                      style={styles.eye}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginTop: 15}}>
                  <Text style={{color: 'blue', fontWeight: 'bold'}}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.singinB,
                    {
                      backgroundColor: 'blue',
                    },
                  ]}
                  //onPress={() => this.validate()}
                >
                  <Text style={styles.signinT}>Sign in</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: 190,
                  }}>
                  <Text style={{color: 'blue'}}>Don't have an account ? </Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={{color: 'blue', fontWeight: 'bold'}}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            </ImageBackground>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#003D8E',
  },
  flex1: {
    // backgroundColor: '#0040C2',
    // flex: 0.5,
  },
  flex2: {
    //backgroundColor: '#FCC80F',
    flex: 1,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
     paddingBottom: 60,
  },
  arrow: {
    marginLeft: 15,
    //position:'absolute',
    marginTop: 30,
  },
  signinH: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
    marginTop: 25,
  },
  welcomeH: {
    color: 'black',
    // fontWeight:'bold',
    fontSize: 20,
    marginTop: 25,
    fontWeight: '900',
  },
  placeholder: {
    height: 35,
    //marginTop: 10,
    paddingLeft: 15,
  },
  singinB: {
    alignSelf: 'center',
    marginTop: 15,
    width: 330,
    // backgroundColor: 'blue',
    borderRadius: 15,
    height: 45,
  },
  signinT: {
    color: 'white',
    textAlign: 'center',
    top: 10,
    fontWeight: 'bold',
  },
  placeholderV: {
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 0.1,
    backgroundColor: '#F1FAFF',
    marginTop: 20,
  },
  tick: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 12,
    top: 10,
  },
  eye: {
    position: 'absolute',
    right: 10,
  },
  welcomeimage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    marginTop: 65,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default Signin;
