import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import Separater from "../components/Separater";
import Dollar from "../components/Dollar";
import Robux from "../components/Robux";
import { FontAwesome5 } from "react-native-vector-icons";

export default function FruitDetail({ route, navigation }) {
  const { id, name, dollar, robux, description, imageUrl } = route.params;
  const url = "data:image/png;base64," + imageUrl;
  const movesetTable = {
    tableHead: ["Name", "Description", "Ranking", "Mastery"],
    tableData: [
      [
        "10,000 KG",
        "User weight changes to 10,000 KG and do AoE, similar to Superhuman X.",
        "C+",
        "1",
      ],
      [
        "20,000 KG",
        "User change the weight of their leg and smash the ground, similar to Gravity Z.",
        "B",
        "20",
      ],
      ["50,000 KG", "2", "B+", "50"],
      ["Lighten", "b", "E", "75"],
    ],
  };

  return (
    <ImageBackground
      source={require("../image/oldpaper.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMethod={"cover"}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "collum",
            width: "100%",
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <Separater />
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text onPress={() => navigation.goBack()}>
                  <FontAwesome5 name="angle-left" size={40} />
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 48, fontWeight: "bold", marginLeft: 30 }}
                >
                  {name}
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={{ uri: url }}
                style={{
                  height: 125,
                  width: 125,
                }}
              />
            </View>
          </View>
        </View>
        <Separater />
        <ScrollView
          style={{
            width: "90%",
            marginTop: 20,

            contentContainerStyle: {},
            showHorizontalScrollIndicator: false,
            showVerticalScrollIndicator: false,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              marginBottom: 80,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                    textAlignVertical: "bottom",
                  }}
                >
                  COST:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 16 }}>
                    <Dollar height={15} width={10} />
                    5000
                  </Text>
                </View>
                <View style={{ marginLeft: 40 }}>
                  <Text style={{ fontSize: 16 }}>
                    <Robux height={16} width={15} />
                    50
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: "100%", marginTop: 20 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                DESCRIPTION:
              </Text>
              <Text style={{ fontSize: 16 }}>
                The Kilo Fruit is a Natural-type Blox Fruit. It costs{" "}
                <Dollar height={15} width={10} />
                5,000, or <Robux height={16} width={15} />
                50, from the Blox Fruit Dealer. It also has a large chance to be
                obtained from the Blox Fruits Dealer Cousin. It was added in
                Update 15. This fruit has a 100% chance of being in stock, and a
                13% chance of spawning in-game. It is used by the Kilo Admiral
                in Blox Fruits. Kilo is currently the cheapest fruit in the game
                and has replaced Bomb as the spotlight. It is the cheapest fruit
                you can get from the Blox Fruits Dealer. {"\n"}
                {"\n"}The money cost of Kilo in update 17.2 was $80,000 or R$220
                from the Blox Fruit Dealer.
              </Text>
            </View>
            <View style={{ width: "100%", marginTop: 20 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                MOVESET:
              </Text>
              <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
                  <Row
                    data={movesetTable.tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                    flexArr={[1.3, 2.5, 1, 1]}
                  />
                  <Rows
                    data={movesetTable.tableData}
                    textStyle={styles.text}
                    flexArr={[1.3, 2.5, 1, 1]}
                  />
                </Table>
              </View>
              <View style={{ width: "100%", marginTop: 20 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
                >
                  COMBOS:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  The Kilo Fruit is a Natural-type Blox Fruit. It costs{" "}
                  <Dollar height={15} width={10} />
                  5,000, or <Robux height={16} width={15} />
                  you can get from the Blox Fruits Dealer. {"\n"}
                  {"\n"}The money cost of Kilo in update 17.2 was $80,000 or
                  R$220 from the Blox Fruit Dealer.
                </Text>
              </View>
              <View style={{ width: "100%", marginTop: 20 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
                >
                  TRIVIA:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  The Kilo Fruit is a Natural-type Blox Fruit. It costs{" "}
                  <Dollar height={15} width={10} />
                  5,000, or <Robux height={16} width={15} />
                  50, from the Blox Fruit Dealer. It also has a large chance to
                  be obtained from the Blox Fruits Dealer Cousin. It was added
                  in U
                </Text>
              </View>
            </View>
            {/* <Text>{route.params.dollor}</Text> */}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  head: { height: 40 },
  text: { margin: 6 },
});
