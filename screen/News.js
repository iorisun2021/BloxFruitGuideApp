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

export default function News({ navigation }) {
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
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>News</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Icon
              name="notifications-outline"
              size={25}
              style={{ marginLeft: 20 }}
            />
            <Icon name="search-outline" size={25} style={{ marginLeft: 20 }} />
            {authenticated ? (
              <>
                <Image
                  source={{ uri: url }}
                  style={{ height: 30, width: 30, marginLeft: 20 }}
                />
              </>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Icon
                  name="person-outline"
                  size={25}
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <ScrollView style={{ marginTop: 20, width: "100%" }}>
          <View
            style={{
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ width: "100%", flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("NewsDetail")}
              >
                <Image
                  style={{ width: "100%", height: 240, resizeMode: "cover" }}
                  source={require("../image/News/Confetti.png")}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 10,
                  marginHorizontal: 10,
                  flexDirection: "column",
                }}
              >
                <View>
                  <MyAppText style={{ fontSize: 20 }}>
                    Event: Confetti
                  </MyAppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 5,
                    marginBottom: 24,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "grey",
                        height: 16,
                        width: 16,
                        borderRadius: 8,
                      }}
                    ></TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 5,
                      }}
                    >
                      <Text>Leo Sun</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="heart-outline" size={16} />
                    <Text style={{ marginLeft: 2 }}>10</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ width: "100%", flexDirection: "column" }}>
              <TouchableOpacity>
                <Image
                  style={{ width: "100%", height: 240, resizeMode: "cover" }}
                  source={require("../image/News/update2.jpeg")}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 10,
                  marginHorizontal: 10,
                  flexDirection: "column",
                }}
              >
                <View>
                  <MyAppText style={{ fontSize: 20 }}>
                    Event: Confetti
                  </MyAppText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 5,
                    marginBottom: 24,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "grey",
                        height: 16,
                        width: 16,
                        borderRadius: 8,
                      }}
                    ></TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 5,
                      }}
                    >
                      <Text>Leo Sun</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="heart-outline" size={16} />
                    <Text style={{ marginLeft: 2 }}>50</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ width: "100%", flexDirection: "column" }}>
              <View style={{ flexDirection: "colunm" }}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: "100%",
                      height: 240,
                      resizeMode: "cover",
                    }}
                    source={require("../image/News/update3.jpeg")}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: 10,
                    marginHorizontal: 10,
                    flexDirection: "column",
                  }}
                >
                  <View>
                    <MyAppText style={{ fontSize: 20 }}>
                      Event: Confetti
                    </MyAppText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 5,
                      marginBottom: 24,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "grey",
                          height: 16,
                          width: 16,
                          borderRadius: 8,
                        }}
                      ></TouchableOpacity>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: 5,
                        }}
                      >
                        <Text>Leo Sun</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="heart-outline" size={16} />
                      <Text style={{ marginLeft: 2 }}>100</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
