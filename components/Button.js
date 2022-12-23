import { TouchableOpacity, Text } from "react-native";
import MyAppText from "../utils/MyAppText";

export default function Button({ title, loading, handleSubmit }) {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={{
        backgroundColor: "#4A95D6",
        height: 40,
        borderRadius: 8,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyAppText style={{ color: "white", fontSize: 20 }}>
        {loading ? "Please wait..." : title}
      </MyAppText>
    </TouchableOpacity>
  );
}
