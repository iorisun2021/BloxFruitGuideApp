import { View, Image } from "react-native";
export default function Dollar({ height, width }) {
  return (
    <View style={{ marginLeft: 5, justifyContent: "center" }}>
      <Image
        source={require("../image/Icon/dollar.webp")}
        style={{ height: height, width: width }}
      ></Image>
    </View>
  );
}
