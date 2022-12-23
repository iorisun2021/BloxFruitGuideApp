import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import MyAppText from "../utils/MyAppText";
import { useEffect } from "react";
import axios from "axios";
import MasonryList from "@react-native-seoul/masonry-list";
// import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "react-native-vector-icons";
import SwipeableFlatList from "react-native-swipeable-list";

export default function UserMngm({ navigation }) {
  const [user, setUser] = useState();
  const [filtered, setFiltered] = useState();
  const [keyword, setKeyword] = useState();

  //   const navigation = useNavigation();

  // useEffect(() => {
  //   loadFruits();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadUsers();
    }, [])
  );

  const loadUsers = async () => {
    try {
      let { data } = await axios.get("get-users");
      setUser(data);
      setFiltered(data);
    } catch (err) {
      console.log(err);
    }
    return;
  };

  const search = async (text) => {
    setKeyword(text);
    setFiltered(
      user.filter((f) => f.name.toLowerCase().includes(text.toLowerCase()))
    );

    return;
  };

  const renderItem = ({ item }) => {
    const url = "data:image/png;base64," + item.image;
    return (
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("UserDetail", {
              name: item.name,
              role: item.role,
              image: item.image,
              email: item.email,
            })
          }
          style={{
            width: "90%",
            alignItems: "center",
            height: 60,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: 56, width: 56, borderRadius: 28 }}
              source={
                item.image == null
                  ? require("../image/Icon/image-not-found.png")
                  : { uri: url }
              }
            />
          </View>
          <View
            style={{
              height: 48,
              marginLeft: 20,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.name}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16 }}>{item.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparator = () => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            height: 1,
            width: "86%",
            backgroundColor: "grey",
          }}
        />
      </View>
    );
  };

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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Text onPress={() => navigation.navigate("GuestDashBoard")}>
                <FontAwesome5 name="angle-left" size={40} />
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                System Users
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              paddingBottom: 30,
              flexDirection: "row",
            }}
          >
            <View style={{ width: "100%", alignItems: "center" }}>
              <TextInput
                //placeholderTextColor="#101010"
                placeholderTextColor="white"
                p
                placeholder="search fruit..."
                style={{
                  position: "relative",
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 12,
                  height: 50,
                  width: "90%",
                  backgroundColor: "black",
                  color: "white",
                  paddingLeft: 60,
                }}
                value={keyword}
                onChangeText={(keyword) => search(keyword)}
              ></TextInput>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                backgroundColor: "grey",
                height: 50,
                width: 50,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
              disabled={true}
            >
              <Icon name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* <MasonryList
          data={fruits}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.name}
        /> */}
          {/* <ScrollView>
          <Text>{JSON.stringify(fruits, null, 4)}</Text>
        </ScrollView> */}

          <FlatList
            style={{ width: "100%", marginBottom: 70 }}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{}}
            data={filtered}
            renderItem={renderItem}
            keyExtractor={(item) => item.email}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
