import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import MyAppText from "../utils/MyAppText";
import Icon from "react-native-vector-icons/Ionicons";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import Banner from "../components/Banner";

export default function Guide({ navigation }) {
  const [auth, setAuth] = useContext(AuthContext);
  const authenticated = auth?.user !== null && auth?.token !== "";
  const url = "data:image/png;base64," + auth?.user?.image;
  logout = () => {
    this.props.navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../image/oldpaper.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMethod={"cover"}
    >
      <SafeAreaView
        style={{ width: "100%", alignItems: "center", marginBottom: 60 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Guide</Text>
          </View>
        </View>
        <ScrollView style={{ marginTop: 20, width: "100%" }}>
          <Banner title={"Level Up"} />
          <Banner title={"Swords"} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
