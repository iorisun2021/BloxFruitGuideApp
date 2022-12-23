import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default CustomTabBarButton = (props) => {
  const { children, accessibilityState, onPress } = props;
  if (accessibilityState.selected) {
    return (
      //   <View style={styles.btnWrapper}>
      //     <View style={{ flexDirection: "row" }}>
      //       <View style={styles.svgGapFiller} />
      //       <Svg width={71} height={58} viewBox="0 0 75 61">
      //         <Path
      //           d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15. 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
      //           fill="white"
      //         />
      //       </Svg>
      //       <View style={styles.svgGapFiller} />
      //     </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.activeBtn}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
      //   </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.inActiveBtn}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  svgGapFiller: {
    backgroundColor: "white",
  },
  btnWrapper: {
    flex: 1,
    alignItems: "center",
  },
  inActiveBtn: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    height: 128,
    justifyContent: "center",
    paddingBottom: 50,
  },
  activeBtn: {
    flex: 1,
    height: 128,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
});
