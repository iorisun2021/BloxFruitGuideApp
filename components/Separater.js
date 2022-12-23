import { View, Image } from "react-native";
export default function Seperater() {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-evenly",
      }}
    >
      <View>
        <Image
          source={require("../image/Icon/separater-left.png")}
          style={{
            height: 30,
            width: 80,
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Image
          source={require("../image/Icon/separater-right.png")}
          style={{
            height: 30,
            width: 80,
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Image
          source={require("../image/Icon/separater-left.png")}
          style={{
            height: 30,
            width: 80,
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Image
          source={require("../image/Icon/separater-right.png")}
          style={{
            height: 30,
            width: 80,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
