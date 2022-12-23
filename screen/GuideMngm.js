import { ImageBackground, View, TextInput, Image, Text } from "react-native";

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

export default function GuideMngm({ navigation }) {
  //Context
  const [auth, setAuth] = useContext(AuthContext);
  //State
  const [name, setName] = useState("");
  const [dollar, setDollar] = useState("");
  const [robux, setRobux] = useState("");
  const [availableLevel, setAvailableLevel] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/add-fruit", {
        name,
        dollar,
        robux,
        availableLevel,
        imageUrl,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        //console.log("REGISTRATION => ", data);

        // Save user and token to AsyncStorage
        console.log("FRUIT CREATED => ", data);
        alert("Add Fruit Successflly");
        setName("");
        setDollar("");
        setRobux("");
        setAvailableLevel("");
        setImageUrl("");
        setLoading(false);
        navigation.navigate("Fruits");
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
          <View
            style={{ flexDirection: "row", alignItems: "center", width: "90%" }}
          >
            <View>
              <Text onPress={() => navigation.navigate("GuestDashBoard")}>
                <FontAwesome5 name="angle-left" size={40} />
              </Text>
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Guide Mnagement{" "}
              </Text>
            </View>
          </View>
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{ justifyContent: "center", width: 200, marginTop: 20 }}
            >
              <Input
                title="NAME:"
                value={name}
                setValue={setName}
                autoCapitalize="words"
              />
              <Input title="DOLLAR:" value={dollar} setValue={setDollar} />
              <Input title="ROBUX:" value={robux} setValue={setRobux} />
              <Input
                title="AVAILABLE LEVEL:"
                value={availableLevel}
                setValue={setAvailableLevel}
              />
              <Input
                title="IMAGE URL:"
                value={imageUrl}
                setValue={setImageUrl}
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
          ></View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
