import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
import MyAppText from "../utils/MyAppText";
import { ChangeFont } from "../utils/MyAppText";
import Button from "../components/Button";
import { AuthContext } from "../context/auth";
import { useContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "react-native-vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/signin", {
        email,
        password,
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
        alert("Login Successflly");
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "90%" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("GuestDashBoard")}
              style={{ width: 50 }}
            >
              <FontAwesome5 name="angle-left" size={40} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Image
              style={{ height: 125, width: 200, resizeMode: "contain" }}
              source={require("../image/logo.webp")}
            />
            {/* <Text style={{marginTop:40, fontSize:30, color:'white', fontWeight:'bold'}}>BLOX FRUITS GUIDE</Text> */}
            <MyAppText style={{ color: "black", fontSize: 30, marginTop: 20 }}>
              BLOX FRUITS GUIDE
            </MyAppText>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <KeyboardAwareScrollView>
              <View style={{ marginTop: 80 }}>
                <TextInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{
                    paddingLeft: 10,
                    borderRadius: 8,
                    backgroundColor: "#c1c1c1",
                    width: 200,
                    height: 40,
                  }}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder="Email Address"
                  placeholderTextColor="black"
                ></TextInput>
                <TextInput
                  autoCapitalize="none"
                  secureTextEntry={true}
                  style={{
                    marginTop: 40,
                    paddingLeft: 10,
                    borderRadius: 8,
                    backgroundColor: "#c1c1c1",
                    width: 200,
                    height: 40,
                  }}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholder="Password"
                  placeholderTextColor="black"
                ></TextInput>

                <View style={{ marginTop: 40 }}>
                  <Button
                    title="LOGIN"
                    loading={loading}
                    handleSubmit={handleSubmit}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Text
                    onPress={() => navigation.navigate("ForgotPassword")}
                    style={{ color: "blue", fontSize: 14 }}
                  >
                    Forgot Password?
                  </Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}
            >
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Not have an account?{" "}
                <Text
                  onPress={() => navigation.navigate("Signup")}
                  style={{ color: "blue" }}
                >
                  Register
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
