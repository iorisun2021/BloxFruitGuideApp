import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Setting from "../components/Setting";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const [auth, setAuth] = useContext(AuthContext);
  const authenticated = auth?.user !== null && auth?.token !== "";
  const navigation = useNavigation();
  const url = "data:image/png;base64," + auth?.user?.image;

  return (
    <ImageBackground
      source={require("../image/oldpaper.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMethod={"cover"}
    >
      <SafeAreaView>
        <View
          style={{
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Settings</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 100,
              width: "90%",
              margin: 20,
              backgroundColor: "white",
              borderRadius: 8,
              flexDirection: "row",
            }}
            onPress={() => {
              authenticated
                ? navigation.navigate("UserDetail", {
                    _id: auth.user._id,
                    name: auth.user.name,
                    email: auth.user.email,
                    image: auth.user.image,
                    role: auth.user.role,
                    canLogout: true,
                  })
                : navigation.navigate("Login");
            }}
          >
            <View style={{ justifyContent: "center", marginHorizontal: 15 }}>
              {authenticated ? (
                <>
                  <Image
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      bordercolor: "#c1c1c1",
                      borderWidth: 0.5,
                    }}
                    source={
                      auth?.user?.image == null
                        ? require("../image/Icon/image-not-found.png")
                        : { uri: url }
                    }
                  />
                </>
              ) : (
                <View
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    borderWidth: 0.5,
                    borderColor: "grey",
                  }}
                ></View>
              )}
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              {authenticated ? (
                <>
                  <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                      {auth?.user?.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, marginTop: 10 }}>
                      {auth?.user?.email}
                    </Text>
                  </View>
                </>
              ) : (
                <View>
                  <Text>Login</Text>
                </View>
              )}
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1,
                marginRight: 10,
              }}
            >
              <Icon
                name="chevron-forward-outline"
                size={24}
                color={"#c1c1c1"}
              />
            </View>
          </TouchableOpacity>
          <ScrollView style={{ width: "100%" }}>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                width: "90%",
                margin: 20,
                backgroundColor: "white",
                borderRadius: 8,
              }}
            >
              <Setting
                icon="contrast-outline"
                color="black"
                title="Dark Mode"
                isSwitch={true}
              />

              <Setting
                icon="notifications"
                color="red"
                title="Notification"
                isSwitch={true}
              />

              <Setting
                icon="volume-medium"
                color="orange"
                title="Sound"
                isSwitch={true}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                width: "90%",
                margin: 20,
                backgroundColor: "white",
                borderRadius: 8,
              }}
            >
              <Setting
                icon="flame"
                color="#35C759"
                title="Fruit Management"
                onPress={() => navigation.navigate("FruitMngm")}
              />

              <Setting
                icon="game-controller"
                color="#007AFE"
                title="Guide Management"
                onPress={() => navigation.navigate("GuideMngm")}
              />

              <Setting
                icon="people"
                color="#5756D5"
                title="User Management"
                onPress={() => navigation.navigate("UserMngm")}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                width: "90%",
                margin: 20,
                backgroundColor: "white",
                borderRadius: 8,
              }}
            >
              <Setting
                icon="file-tray-full"
                color="#8E8D92"
                title="Legal & Regulatory"
              />

              <Setting icon="cog" color="#8E8D92" title="About" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
