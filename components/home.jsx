import React from "react";
import moment from "moment";
import { StyleSheet, Text, View, Card } from "react-native";
import { Smarty } from "./data";

export default function Home({ name }) {
  return (
    <View style={styles.smarty}>
      <Text>
        {moment().format("MMMM DD, YYYY")} <br />
        Welcome, {name}
      </Text>
      {Smarty.map((s) => (
        <>
          <div>
            {s.title}
            <br />
            {s.devices}
          </div>
          {/* <Card style={styles.smarty__cards}>
            <Card.Body />
            <Card.Footer
              style={styles.smarty__cards__footer}
              content={
                <p>
                  {s.title}
                  <br />
                  {s.devices}
                </p>
              }
            />
          </Card> */}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  smarty: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
