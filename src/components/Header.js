import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { create } from "uuid-js";

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Quiz App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#00bfff",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Header;
