import { View, Text, Switch, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
export default function Setting({
  icon,
  color,
  title,
  isSwitch = false,
  onPress,
}) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        disabled={isSwitch}
        onPress={onPress}
        style={{
          paddingLeft: 20,
          flexDirection: "row",
          height: 48,
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 4,
              backgroundColor: color,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name={icon} size={20} color={"white"} />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            height: "100%",
            marginLeft: 15,
            flex: 1,
            borderBottomColor: "#efefef",
            borderBottomWidth: 0.5,
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 16 }}>{title}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              marginRight: 10,
            }}
          >
            {isSwitch ? (
              <>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={"#f5dd4b"}
                  ios_backgroundColor="#3e3e3e"
                  // onValueChange={this.toggleSwitch()}
                  // value={isEnabled}
                />
              </>
            ) : (
              <>
                <Icon
                  name="chevron-forward-outline"
                  size={24}
                  color={"#c1c1c1"}
                />
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
