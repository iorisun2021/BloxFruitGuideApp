import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

export default CustomTabBar = (props) => {
  return (
    <View>
      <View style={styles.tabBar}>
        <BottomTabBar {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    height: 30,
    right: 20,
    left: 20,
    backgroundColor: "white",
    backgourndColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
