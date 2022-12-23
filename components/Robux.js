import { View, Image } from "react-native";
export default function Robux({ height, width }) {
  return (
    <View style={{ marginLeft: 5, justifyContent: "center" }}>
      <Image
        source={require("../image/Icon/robux.webp")}
        style={{ height: height, width: width }}
      ></Image>
    </View>
  );
}
