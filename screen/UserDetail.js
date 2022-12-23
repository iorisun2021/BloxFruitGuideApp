import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "react-native-vector-icons";
import axios from "axios";
import { AuthContext } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserDetail({ route, navigation }) {
  const { _id, name, email, role, image, canLogout } = route.params;
  const [updateName, setUpdateName] = React.useState(name);
  const [updateImage, setUpdateImage] = React.useState(image);
  const [auth, setAuth] = React.useContext(AuthContext);
  const url = "data:image/png;base64," + image;

  const signout = async () => {
    setAuth({ user: null, token: "" });
    await AsyncStorage.removeItem("@auth");
    await navigation.goBack();
  };

  const updateUser = async (_id) => {
    try {
      const { data } = await axios.put(`update-user/${_id}`, {
        name: updateName,
      });
      alert("User Updated");
      navigation.goBack();
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <ImageBackground
      source={require("../image/oldpaper.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMethod={"cover"}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "collum",
            width: "100%",
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text onPress={() => navigation.goBack()}>
                <FontAwesome5 name="angle-left" size={40} />
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 30,
                  backgroundColor: "#4A95D6",
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => updateUser(_id)}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 200,
              width: 200,
              borderRadius: 999,
              position: "relative",
              overflow: "hidden",
              marginTop: 40,
            }}
          >
            <Image
              source={{ uri: url }}
              style={{
                height: 200,
                width: 200,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "100%",
                height: "22%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightgray",
                opacity: 0.7,
              }}
            >
              <Text>Edit Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </View>
          </View>
          <TextInput
            value={updateName}
            onChangeText={(text) => setUpdateName(text)}
            style={{ marginTop: 30, fontWeight: "bold", fontSize: 40 }}
          ></TextInput>
          <View style={{ marginTop: 60 }}>
            <Text style={{ fontSize: 16 }}>Email: {email}</Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>Role: {role}</Text>
          </View>
        </View>
        {canLogout && (
          <View style={{ width: "100%", alignItems: "center", marginTop: 80 }}>
            <TouchableOpacity
              style={{
                width: 160,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={signout}
            >
              <Text
                style={{ fontWeight: "bold", color: "orange", fontSize: 24 }}
              >
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  head: { height: 40 },
  text: { margin: 6 },
});
