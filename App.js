import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";

import Home from "./components/home.jsx";

function Main({ navigation }) {
  const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{
          width: 300,
          height: 200,
        }}
        // resizeMode={"contain"}
        source={require("./assets/images/home.svg")}
      />
      <Text style={styles.title}>Smarty</Text>
      <Text style={styles.text}>Welcome Home</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "#8E9295",
          borderWidth: 1,
          backgroundColor: "#F8FAF9",
          textAlign: "center",
          color: "#8E9295",
          fontWeight: "400",
          margin: "10px",
        }}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Your Name"
      />
      <Button
        title={<p>CONTINUE</p>}
        onPress={() => navigation.navigate("Home")}
        style={{ borderRadius: "15px", color: "#F8FAF9", width: "100px" }}
      />
    </View>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          // options={{ title: "Main" }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: "42px",
    fontWeight: "600",
    color: "#0D1215",
    paddingTop: "10px",
  },
  text: { color: "#8E9295", fontSize: "26px", padding: "10px" },
});
