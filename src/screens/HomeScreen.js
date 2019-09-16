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
        <Text style={styles.heading}>Quiz App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Camera")}
        >
          <Text style={{ fontSize: 15 }}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 12,
    margin: 10,
    color: "white",
    alignItems: "center",
    backgroundColor: "#e74c3c",
    borderRadius: 5
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30
  }
});

export default HomeScreen;
