import React from "react";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import { CardImage } from "react-native-cards";
import { Smarty } from "./data";

export default function Home({ route }) {
  const { name } = route.params;
  return (
    <View style={styles.home}>
      <Text style={styles.date}>
        {moment().format("MMMM DD, YYYY")} <br />
      </Text>
      <Text style={styles.text}>Welcome, {name}!</Text>
      {Smarty.map((s) => (
        <CardImage
          key={s.toString()}
          style={styles.CardImage}
          source={s.image}
          title={
            <Text style={[styles.title, styles.devices]}>
              {s.title} <br /> {s.devices}
            </Text>
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F8FAF9",
    padding: "10px",
  },
  date: {
    color: "#8E9295",
    fontSize: "16px",
  },
  text: {
    color: "#0D1215",
    fontSize: "26px",
    fontWeight: "600",
    paddingBottom: "10px",
  },

  CardImage: {
    // margin: "10px",
    borderRadius: "20px",
    // height: "200px",
  },
  // title: { fontSize: "16px", fontWeight: "600" },
  // devices: { fontSize: "12px" },
});
