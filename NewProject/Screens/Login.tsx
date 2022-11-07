import { Text, View, Image, SafeAreaView, TouchableOpacity, Alert, ScrollView, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import CustomInputs from '../Components/CustomInput'

import asyncstorage from '@react-native-async-storage/async-storage';
import { BaseUrl, login } from '../Config';

import { Formik } from "formik";
import * as yup from "yup";

interface props {
  props: any,
  navigation: any
}
interface s {
  email: any
  password: any
  modalAlert: boolean
  AlertEmail: any
  btnName1: any
  btnName2: any
  isSecure:boolean
  loading:boolean
}
export default class Login extends Component<props, s>  {
  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      password: '',
      modalAlert: false,
      AlertEmail: '',
      btnName1: '',
      btnName2: '',
      isSecure:true,
      loading:false
    }
  }
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  customerFillProfileValidationSchema = yup.object().shape({
    email: yup.string()
      .required('Email is required')
      // .test('email', 'Email invalid', (value) => {
      //   return this.validateEmail(value) 
      // }),
       .matches(this.reg, "Invalid Email"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      // .matches(this.strongRegex, "Password must be at least 8- characters long one uppercase with one lowercase & one numeric character")
      .required('Password is required'),
  })
  validateEmail = (email: string | undefined) => {
    return yup.string().email().isValidSync(email)
  };
  signinAPI = (values: any) => {
    const { email, password } = values;
    const data = {
      email: email,
      password: password,
    };
    fetch(BaseUrl+login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('token110', res);
        if (res.code == 0) {
         asyncstorage.setItem('token', res.data.Token);
          console.log('token110', res.data);
          //this.props.navigation.navigate('BottomTabNavigator')
          Alert.alert('Alert Title', 'Success', [
            {
              text: 'OK',
              onPress: () => {
                this.props.navigation.navigate('BottomTabNavigator'),
                  this.state.email == '',
                  this.state.password == '';
              },
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]);
        } else {
          Alert.alert(res.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  OnClick = () => {
    this.setState({ isSecure: !this.state.isSecure })
  }
  NavigateSignup = () => {
    this.props.navigation.navigate("Signup")
  }
  render() {
    return (

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/Logo.png')}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}>
<View style={{ marginHorizontal:30, marginTop:"100%"}}>
          <Formik
            validationSchema={this.customerFillProfileValidationSchema}
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={(values, { resetForm }) => {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
                this.signinAPI(values);
              }
            
            }}

          >
            {({ handleChange, handleSubmit, errors, isValid, dirty, values }) => (
              <>
                <CustomInputs
                  placeholderText="Email"
                  isDisabled={false}
                  value={values.email}
                  onchangeText={handleChange("email")}
                  errorText={errors.email} 
                  onClick={undefined} 
                  isSecure={undefined}   
                  eyeIcon={false}             />

                <CustomInputs
                  isDisabled={false}
                  value={values.password}
                  placeholderText={"Password"}
                  onchangeText={handleChange("password")}
                  errorText={errors.password}
                  isSecure={this.state.isSecure}
                  onClick={() => this.OnClick()}
                  eyeIcon={true}
                />
                
                <View style={{ marginTop: 20 }}>
                  <TouchableOpacity
                    disabled={!(isValid && dirty)}
                    onPress={() => handleSubmit()}
                    style={{
                      minHeight: 55,
                      borderRadius: 12,
                      justifyContent: "center",
                      backgroundColor:
                        // !(isValid && dirty)

                        //   ? "#F2E6F4"
                        "#000",
                      opacity: !(isValid && dirty) || this.state.loading ? 0.5 : 1,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        padding: 15,
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 16,
                        display: this.state.loading ? 'none' : 'flex'
                      }}
                    >
                      {"SIGN IN"}
                    </Text>
                    {
                      this.state.loading &&
                      <ActivityIndicator size="large" color="#3f015e" />
                    }
                  </TouchableOpacity>
                </View>


              


            
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 50,
                    marginTop: 30,
                    marginBottom: 30
                  }}
                >
                  <Text style={{ textAlign: "center", color: "grey" }}>
                    {" "}
                    Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.NavigateSignup()
                    }
                  >
                    <Text style={{ color: "blue" }}> Register now</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          </View>
        </ImageBackground>

      </View>

    )
  }
}