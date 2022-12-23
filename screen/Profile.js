import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function Profile({ navigation }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [pic, setPic] = useState("null");
  const signout = async () => {
    setAuth({ user: null, token: "" });
    await AsyncStorage.removeItem("@auth");
    await navigation.goBack();
  };
  const url = "data:image/png;base64," + auth?.user?.image;
  const urll = "data:image/png;base64," + pic;

  const uploadImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!_image.cancelled) {
      setPic(_image.base64);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <View
          style={{
            position: "relative",
            height: 200,
            width: 200,
            borderRadius: 999,
            elevation: 2,
            overflow: "hidden",
          }}
        >
          <Image
            source={
              auth?.user?.image == null
                ? require("../image/Icon/image-not-found.png")
                : { uri: url }
            }
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
              height: "25%",
              width: "100%",
              opacity: 0.7,
              backgroundColor: "lightgrey",
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => uploadImage()}
            >
              <Text>{auth?.user?.image ? "Edit" : "Uplode"} Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
              NAME:{" "}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
              EMAIL:{" "}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
              ROLE:{" "}
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginLeft: 10, width: "60%" }}
          >
            <Text style={{ fontSize: 24, marginTop: 10 }}>
              {auth?.user?.name}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 10 }}>
              {auth?.user?.email}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 10 }}>
              {auth?.user?.role}
            </Text>
          </View>
        </View>
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
            <Text style={{ fontWeight: "bold", color: "orange", fontSize: 24 }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{ uri: urll }}
            style={{ width: 200, height: 200, borderRadius: 999 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
