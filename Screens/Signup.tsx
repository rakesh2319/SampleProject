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
  ImageBackground,
} from 'react-native';

import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface p {
  navigation: any;
}
interface s {
  email: any;
  password: any;
  name: any;
}
export default class Signup extends Component<p, s> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  validate = () => {
    const { email, password, name } = this.state;
    const data = {
      name: name,
      email: email,
      password: password,
    };
    console.log('data>>', data);
    fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log('new data', result.message),
         alert(result.message);
      //    if(result.message==0){
      //   this.props.navigation.navigate("Home")
      // }
    })
      .catch(err => {
        console.log('err', err.message);
        alert(err);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#0040C2" />
            <ImageBackground
              source={require('../Assets/bgimage.jpeg')}
              style={styles.welcomeimage}>
              <View style={styles.flex1}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={25}
                    style={styles.arrow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.signinH}>Sign up</Text>
              </View>
              <View style={styles.flex2}>
                <View style={{marginHorizontal: 35}}>
                  <Text style={styles.welcomeH}>Welcome Back</Text>
                  <Text style={{color: 'grey', marginTop: 5}}>
                    Hello there sign up to continue
                  </Text>
                  <Text
                    style={{marginTop: 15, color: 'grey', fontWeight: '600'}}>
                    Name
                  </Text>
                  <View style={styles.placeholderV1}>
                    <TextInput
                      placeholder="Enter name"
                      style={{marginLeft: 15}}
                      onChangeText={text => this.setState({name: text})}
                    />
                  </View>
                  <Text
                    style={{marginTop: 20, color: 'grey', fontWeight: '600'}}>
                    email
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
                  <Text
                    style={{marginTop: 20, color: 'grey', fontWeight: '600'}}>
                    Password
                  </Text>
                  <View style={styles.placeholderV}>
                    <TextInput
                      placeholder="Enter your password"
                      value={this.state.password}
                      //secureTextEntry={true}
                      onChangeText={text => this.setState({password: text})}
                      placeholderTextColor="lightgrey"
                      // backgroundColor="#F1FAFF"
                      style={styles.placeholder}
                    />
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.singinB,
                      {
                        backgroundColor: 'blue',
                      },
                    ]}
                    onPress={() => this.validate()}>
                    <Text style={styles.signinT}>Sign up</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginTop: 190,
                    }}>
                    <Text style={{color: 'blue'}}> </Text>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.goBack()}>
                      <Text style={{color: 'blue', fontWeight: 'bold'}}></Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#003D8E',
  },
  flex1: {
    //backgroundColor: '#0040C2',
    //flex: 0.2,
    marginTop: 30,
  },
  flex2: {
    //backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  arrow: {
    marginLeft: 15,
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
    //marginLeft: 15,
    paddingLeft: 15,
    borderRadius: 10,
  },
  singinB: {
    alignSelf: 'center',
    marginTop: 85,
    width: 330,
    backgroundColor: 'skyblue',
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
    borderRadius: 5,
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
  placeholderV1: {
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.1,
    backgroundColor: '#F1FAFF',
    marginTop: 20,
    height: 35,
  },
  welcomeimage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
