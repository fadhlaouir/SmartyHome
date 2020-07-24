import { StatusBar } from "expo-status-bar";
import React from "react";
import moment from "moment";
import { Card } from "antd-mobile";
import { Text, View } from "react-native";
import Smarty from "./data";
import "./home.scss";

export default function Home() {
  return (
    <View className="smarty">
      <Text>
        {moment().format("MMMM DD, YYYY")} <br />
        Welcome, XXX
      </Text>

      <Card className="smarty__cards">
        <Card.Body className="smarty__cards__body">
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
          className="smarty__cards__footer"
          content={<p>footer content</p>}
        />
      </Card>
    </View>
  );
}
