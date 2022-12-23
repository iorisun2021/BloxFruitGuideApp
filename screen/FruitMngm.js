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
  StatusBar,
  Pressable,
} from "react-native";
import MyAppText from "../utils/MyAppText";
import { useEffect } from "react";
import axios from "axios";
import MasonryList from "@react-native-seoul/masonry-list";
// import { useNavigation } from "@react-navigation/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "react-native-vector-icons";
import SwipeableFlatList from "react-native-swipeable-list";

const darkColors = {
  background: "#121212",
  primary: "#BB86FC",
  primary2: "#3700b3",
  secondary: "#03DAC6",
  onBackground: "#FFFFFF",
  error: "#CF6679",
};

const colorEmphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const extractItemKey = (item) => {
  return item._id.toString();
};

function renderItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

export default function FruitMngm({ navigation }) {
  const [fruit, setFruit] = useState();
  const [filtered, setFiltered] = useState();
  const [keyword, setKeyword] = useState();

  //   const navigation = useNavigation();

  // useEffect(() => {
  //   loadFruits();
  // }, []);

  const Item = ({ item, backgroundColor, textColor, deleteItem }) => {
    const url = "data:image/png;base64," + item.imageUrl;
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FruitDetail", {
              name: item.name,
              imageUrl: item.imageUrl,
            })
          }
          style={styles.item}
          activeOpacity={1}
        >
          <View style={styles.avatar}>
            <Image
              style={{ height: 56, width: 56, borderRadius: 28 }}
              source={
                item.imageUrl == null
                  ? require("../image/Icon/image-not-found.png")
                  : { uri: url }
              }
            />
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUsers();
    }, [])
  );

  const loadUsers = async () => {
    try {
      let { data } = await axios.get("get-fruits");
      setFruit(data);
      setFiltered(data);
    } catch (err) {
      console.log(err);
    }
    return;
  };

  const search = async (text) => {
    setKeyword(text);
    setFiltered(
      fruit.filter((f) => f.name.toLowerCase().includes(text.toLowerCase()))
    );

    return;
  };

  const deleteItem = (itemId) => {
    try {
      const { data } = axios.delete(`delete-fruit/${itemId}`);
      setFiltered(filtered.filter((f) => f._id !== itemId));
      alert("User deleted!");
      navigation.navigate("FruitMngm");
    } catch (err) {
      console.log(err);
    }
  };

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button]}>
          <Pressable
            onPress={() => deleteItem(qaItem.id)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <FontAwesome5
              name="trash"
              size={16}
              color={"white"}
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
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
              <FontAwesome5 name="angle-left" size={40} color={"white"} />
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              Fruits
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
              placeholderTextColor="#c1c1c1"
              p
              placeholder="search user..."
              style={{
                position: "relative",
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 12,
                borderColor: "white",
                height: 50,
                width: "90%",
                backgroundColor: "black",
                color: "white",
                paddingLeft: 60,
                fontSize: 16,
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
              borderColor: "white",
              borderWidth: 1,
              borderRightWidth: 0,
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

        <SwipeableFlatList
          style={{ width: "90%" }}
          keyExtractor={extractItemKey}
          data={filtered}
          renderItem={({ item }) => (
            <Item item={item} deleteItem={() => deleteItem()} />
          )}
          maxSwipeDistance={100}
          renderQuickActions={({ index, item }) => QuickActions(index, item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "black",
    height: 80,
    flexDirection: "row",
  },
  messageContainer: {
    backgroundColor: darkColors.backgroundColor,
    maxWidth: 300,
    justifyContent: "center",
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    color: darkColors.primary,
    opacity: colorEmphasis.high,
    fontWeight: "800",
  },
  email: {
    fontSize: 14,
    color: darkColors.onBackground,
    opacity: colorEmphasis.high,
    marginTop: 5,
  },
  text: {
    fontSize: 10,
    color: darkColors.onBackground,
    opacity: colorEmphasis.medium,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: darkColors.onBackground,
    opacity: colorEmphasis.high,
    borderColor: darkColors.primary,
    borderWidth: 0,
    borderRadius: 28,
    marginRight: 7,
    alignSelf: "center",
  },
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: darkColors.onBackground,
    opacity: colorEmphasis.medium,
  },
  qaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
  button: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  button3Text: {
    color: "white",
  },
  contentContainerStyle: {
    flexGrow: 1,
    //backgroundColor: darkColors.backgroundColor,
  },
});
