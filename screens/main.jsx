import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { COLORS } from "../shared/colors";

export default function Main({ navigation }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const nameValidator = () => {
    !nameError ? setNameError("") : setNameError("Please enter your name!");
  };
  const onsubmit = () => {
    let rjx = /^[a-zA-z]+$/;
    let isValid = rjx.test(name);
    !isValid
      ? setNameError("Please enter your name!")
      : navigation.navigate("Home", { name: name });
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
      <Text style={styles.textError}>{nameError}</Text>
      <Button
        style={styles.button}
        onPress={() => onsubmit()}
        title="CONTINUE"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 350, height: 400, resizeMode: "contain" },
  title: {
    color: COLORS.black,
    fontSize: "48px",
    fontWeight: "600",
  },
  text: { color: COLORS.gray, fontSize: "24px", padding: "10px" },
  textError: { color: COLORS.red, marginBottom: "10px", fontWeight: "400" },
  input: {
    backgroundColor: COLORS.white,
    color: COLORS.gray,
    height: 50,
    borderWidth: 0.5,
    textAlign: "center",
    fontWeight: "400",
    fontSize: "22px",
    margin: "10px",
    width: "200px",
  },
  button: {
    borderRadius: "7px",
    width: "180px",
    height: 50,
  },
});
