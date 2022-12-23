import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MyAppText from "../utils/MyAppText";
import { ChangeFont } from "../utils/MyAppText";
import Button from "../src/component/Button";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("GuestDashBoard");
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <Image
            style={{
              marginBottom: 40,
              height: 125,
              width: 200,
              resizeMode: "contain",
            }}
            source={require("../image/logo.webp")}
          />
          {/* <Text style={{marginTop:40, fontSize:30, color:'white', fontWeight:'bold'}}>BLOX FRUITS GUIDE</Text> */}
        </View>
        <View style={{ flex: 3 }}>
          <MyAppText
            style={{
              color: "white",
              fontSize: 36,
              marginTop: 20,
            }}
          >
            BLOX FRUITS GUIDE
          </MyAppText>
        </View>
      </View>
    );
  }
}
