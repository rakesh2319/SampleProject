import React, { Component } from "react";
import { TextInput, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  isDisabled: boolean;
  value: string;
  placeholderText: string;
  onchangeText: any
  errorText: any
  onClick: any
  isSecure: any
  eyeIcon:boolean
};
type State = {
  isDisabled: boolean;
  value: string;
  placeholderText: string;
  isOnFocus: boolean;
};

export default class CustomInput extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isDisabled: this.props.isDisabled,
      value: this.props.value,
      placeholderText: this.props.placeholderText,
      isOnFocus: false,

    };
  }

  render() {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffffff",
            borderColor: this.state.isOnFocus ? "#000" : "transparent",
            borderWidth: 2,
            borderRadius: 12,
            marginTop: 20
          }}
        >
          <TextInput
            placeholder={this.state.placeholderText}
            placeholderTextColor="#C7C7CD"
            secureTextEntry={this.props.isSecure}
            style={{
              flex: 1,
              paddingLeft: 20,
              minHeight: 58,
              backgroundColor: "#FFFFFF",
              borderColor: this.state.isOnFocus ? "#000" : "transparent",
              color: "black",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: "bold",


            }}
            onBlur={() => {
              this.setState({ isOnFocus: false });
            }}
            onFocus={() => {
              this.setState({ isOnFocus: true });
            }}
            onChangeText={this.props.onchangeText}
            value={this.props.value}
          />

          <TouchableOpacity style={{}}
            onPress={() => this.props.onClick()}
          >
            {this.props.eyeIcon &&
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", right: 15 }}>
              <FontAwesome
                name="eye"
                size={20}
                color="#7B4397"
                style={{}} />
            </View>
  }
          </TouchableOpacity>
        </View>
            

        {this.props.errorText ? (
          <Text style={[styles.errorText]}>{this.props.errorText}</Text>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: "rgba(220, 96, 104, 1)",
    fontWeight: '700',
    //top: -15,
    marginHorizontal: 10,
    // paddingTop: Scale (5)
  },
})
