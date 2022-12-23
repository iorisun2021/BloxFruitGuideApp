import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Input from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../components/Button";
import { useState, useContext } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyAppText from "../utils/MyAppText";
import { FontAwesome5 } from "react-native-vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

export default function Signup({ navigation }) {
  //Context
  const [auth, setAuth] = useContext(AuthContext);
  //State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const url = "data:image/png;base64," + image;

  const uploadImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!image.cancelled) {
      setImage(image.base64);
    }
  };

  const handleSubmit = async () => {
    try {
      if (password !== confirm) {
        alert("Passwords don't match");
        return;
      }

      setLoading(true);

      const { data } = await axios.post("/signup", {
        name,
        email,
        password,
        image,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        //console.log("REGISTRATION => ", data);
        // Save user and token to Context
        setAuth(data);
        // Save user and token to AsyncStorage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        alert("Registered Successflly");
        setLoading(false);
        navigation.navigate("GuestDashBoard");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ width: 50 }}
            >
              <FontAwesome5 name="angle-left" size={40} />
            </TouchableOpacity>
          </View>
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 200,
                width: 200,
                borderRadius: 999,
                position: "relative",
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Image
                style={{ height: 200, width: 200 }}
                source={{ uri: url }}
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
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => uploadImage()}
                >
                  <Text>Edit Image</Text>
                  <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ justifyContent: "center", width: 200, marginTop: 20 }}
            >
              <Input
                title="NAME:"
                value={name}
                setValue={setName}
                autoCapitalize="words"
              />
              <Input
                title="EMAIL:"
                value={email}
                setValue={setEmail}
                keyboardType="email-address"
              />
              <Input
                title="PASSWORD:"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
              />
              <Input
                title="CONFIRM PASSWORD:"
                value={confirm}
                setValue={setConfirm}
                secureTextEntry={true}
              />
              <View
                style={{ width: "100%", alignItems: "center", marginTop: 20 }}
              >
                <Button
                  title="Submit"
                  loading={loading}
                  handleSubmit={handleSubmit}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 12 }}>
                Agree with{" "}
                <Text style={{ color: "blue", fontSize: 12 }}>
                  User Agreements
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
