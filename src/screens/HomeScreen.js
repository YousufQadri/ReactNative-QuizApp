import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Header from "../components/Header";

class HomeScreen extends React.Component {
  state = {};
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Camera")}
          >
            <Text style={{ fontSize: 18 }}>Let's get started</Text>
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
    flex: 1
  },

  body: {
    flex: 8,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 15,
    margin: 10,
    color: "white",
    alignItems: "center",
    backgroundColor: "#e74c3c",
    borderRadius: 5
  }
});

export default HomeScreen;
