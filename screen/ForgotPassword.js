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

export default function ForgotPassword({ navigation }) {
  //Context
  const [auth, setAuth] = useContext(AuthContext);
  //State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/forgot-password", {
        email,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        //console.log("REGISTRATION => ", data);
        // Save user and token to AsyncStorage
        alert("Enter the new password and reset code we sent in your email");
        setLoading(false);
        setVisible(true);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/reset-password", {
        email,
        password,
        resetCode,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        //console.log("REGISTRATION => ", data);
        // Save user and token to AsyncStorage
        alert("Now your can login with your new password");
        setLoading(false);
        navigation.navigate("Login");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <KeyboardAwareScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
            style={{ justifyContent: "center", width: 200, marginTop: 120 }}
          >
            <Input
              title="YOUR EMAIL:"
              value={email}
              setValue={setEmail}
              keyboardType="email-address"
            />
            {visible && (
              <>
                <Input
                  title="NEW PASSWORD:"
                  name="PASSWORD"
                  value={password}
                  setValue={setPassword}
                  secureTextEntry={true}
                />
                <Input
                  title="RESET CODE:"
                  name="RESET CODE"
                  value={resetCode}
                  setValue={setResetCode}
                />
              </>
            )}
            <Text>
              {JSON.stringify({ email, password, resetCode }, null, 4)}
            </Text>
            <View
              style={{ width: "100%", alignItems: "center", marginTop: 60 }}
            >
              <Button
                title="Submit"
                loading={loading}
                handleSubmit={visible ? handlePasswordReset : handleSubmit}
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
            <Text style={{ color: "blue", fontSize: 12 }}>User Agreement</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
