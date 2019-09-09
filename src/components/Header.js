import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title = "header" }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
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
    fontWeight: "bold",
    color: "white"
  }
});

export default Header;
