import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { COLORS } from "./colors";

export default function Main({ navigation }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const nameValidator = () => {
    nameError == ""
      ? setNameError("Please enter your name!")
      : setNameError("");
  };
  const onsubmit = () => {
    let rjx = /^[a-zA-z]+$/;
    let isValid = rjx.test(name);
    isValid
      ? navigation.navigate("Home", { name: name })
      : setNameError("Please enter your name!");
  };
  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={require("../assets/images/home.svg")}
      />
      <Text style={styles.title}>Smarty</Text>
      <Text style={styles.text}>Welcome Home</Text>
      <TextInput
        style={styles.input}
        onBlur={() => nameValidator()}
        onChangeText={(text) => setName(text)}
        placeholder="Your Name"
      />
      <Text style={{ color: "red", marginBottom: "10px" }}>{nameError}</Text>
      <Button
        buttonStyle={styles.button}
        onPress={() => onsubmit()}
        title="CONTINUE"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 400, height: 400, resizeMode: "contain" },
  title: {
    color: COLORS.black,
    fontSize: "35px",
    fontWeight: "600",
  },
  text: { color: COLORS.gray, fontSize: "18px", padding: "10px" },
  input: {
    backgroundColor: COLORS.white,
    color: COLORS.gray,
    height: 40,
    borderWidth: 1,
    textAlign: "center",
    fontWeight: "600",
    margin: "10px",
  },
  button: {
    color: COLORS.white,
    borderRadius: "7px",
    width: "160px",
  },
});
