import React from "react";
import moment from "moment";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Smarty } from "./data";
import { COLORS } from "./colors";

export default function Home({ route }) {
  const { name } = route.params;
  return (
    <View style={styles.home}>
      <Text style={styles.date}>
        {moment().format("MMMM DD, YYYY")} <br />
      </Text>
      <Text style={styles.text}>Welcome, {name}!</Text>
      {Smarty.map((s) => (
        <ImageBackground
          key={s.toString()}
          source={s.image}
          style={styles.CardImage}
        >
          <Text style={styles.title}>{s.title}</Text>
          <Text style={styles.devices}>{s.devices}</Text>
        </ImageBackground>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: COLORS.white,
    padding: "10px",
  },
  date: {
    color: COLORS.gray,
    fontSize: "16px",
  },
  text: {
    color: COLORS.black,
    fontSize: "26px",
    fontWeight: "600",
    paddingBottom: "10px",
  },

  CardImage: {
    borderColor: COLORS.white,
    borderBottomColor: COLORS.gray,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    height: "170px",
    margin: "10px",
    boxShadow: "0px 2px #8E9295",
  },
  title: {
    color: COLORS.white,
    fontSize: "16px",
    fontWeight: "600",
    position: "absolute",
    bottom: "50px",
    left: "10px",
  },
  devices: {
    color: COLORS.white,
    fontSize: "14px",
    position: "absolute",
    bottom: "30px",
    left: "10px",
  },
});
