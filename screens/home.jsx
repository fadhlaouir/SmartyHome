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
          style={styles.card}
          source={s.image}
          title={
            <>
              <span>{s.title}</span>
              <br />
              <span>{s.devices}</span>
            </>
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
    fontSize: "12px",
  },
  text: {
    color: "#0D1215",
    fontSize: "20px",
    fontWeight: 600,
  },
  card: { borderRadius: "20px" },
  cardTitle: {},
  devices: {},
});
