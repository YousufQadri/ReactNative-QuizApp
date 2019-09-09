import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Header from "./src/components/Header";

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.button}>
            <Text>Let's get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    height: 100
  },

  body: {
    flex: 6,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 6,
    margin: 10,
    color: "white",
    fontSize: 18,
    alignItems: "center",
    backgroundColor: "#e74c3c",
    borderRadius: 5
  }
});
