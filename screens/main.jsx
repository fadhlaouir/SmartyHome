import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Button } from "react-native-elements";

export default function Main({ navigation }) {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState("");
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
    fontSize: "35px",
    fontWeight: "600",
    color: "#0D1215",
  },
  text: { color: "#8E9295", fontSize: "18px", padding: "10px" },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#F8FAF9",
    textAlign: "center",
    color: "#8E9295",
    fontWeight: "600",
    margin: "10px",
  },
  button: {
    borderRadius: "7px",
    color: "#F8FAF9",
    width: "160px",
  },
});
