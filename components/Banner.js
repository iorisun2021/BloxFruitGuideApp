import { ImageBackground, TouchableOpacity, Text, View } from "react-native";

export default function Banner({ title }) {
  return (
    <ImageBackground
      source={require("../image/Banner/weapon.png")}
      style={{ width: "100%", height: 100, backgroundColor: "white" }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            marginRight: 30,
            fontStyle: "italic",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
