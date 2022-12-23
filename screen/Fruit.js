import React, { useState, useContext } from "react";
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
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FruitContext } from "../context/fruit";

export default function Fruit({ navigation }) {
  const [fruits, setFruits] = useContext(FruitContext);
  const [filtered, setFiltered] = useState();
  const [keyword, setKeyword] = useState("");
  //   const navigation = useNavigation();

  // useEffect(() => {
  //   loadFruits();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFruits();
    }, [])
  );

  const loadFruits = async () => {
    try {
      let { data } = await axios.get("get-fruits");
      setFruits(data);
      setFiltered(data);
      await AsyncStorage.setItem("@fruit", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
    return;
  };

  const search = async (text) => {
    setKeyword(text);
    setFiltered(
      fruits.filter((f) => f.name.toLowerCase().includes(text.toLowerCase()))
    );

    return;
  };

  const renderItem = ({ item }) => {
    const url = "data:image/png;base64," + item.imageUrl;
    return (
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FruitDetail", {
              id: item._id,
              name: item.name,
              imageUrl: item.imageUrl,
            })
          }
          style={{
            width: "90%",

            alignItems: "center",
            height: 100,

            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 8,
            }}
          >
            <Image
              style={{ height: 80, width: 80 }}
              source={
                item.imageUrl == null
                  ? require("../image/Icon/image-not-found.png")
                  : { uri: url }
              }
            />
          </View>
          <View
            style={{
              height: 80,
              marginLeft: 20,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {item.name}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../image/Icon/dollar.webp")}
                style={{ width: 8, resizeMode: "contain" }}
              />
              <Text style={{ marginLeft: 5 }}>{item.dollar}</Text>
              <Image
                source={require("../image/Icon/robux.webp")}
                style={{ width: 16, resizeMode: "contain", marginLeft: 30 }}
              />
              <Text style={{ marginLeft: 5 }}>{item.robux}</Text>
            </View>
            <View>
              <Text>Available Levels: {item.availableLevel}</Text>
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
          <View style={{ width: "90%", marginBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Fruits</Text>
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
                placeholderTextColor="#c1c1c1"
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
          <FlatList
            style={{ width: "100%", marginBottom: 70 }}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{}}
            data={filtered}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
