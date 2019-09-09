import React from "react";
import { View, Text, StyleSheet } from "react-native";

class QuizList extends React.Component {
  state = {};
  render() {
    const { question, options } = this.props;
    console.log(this.props);

    return (
      <View>
        <View>
          <Text>{question}</Text>
        </View>
        <View>{/* <Text>{options}</Text> */}</View>
        {}
      </View>
    );
  }
}

export default QuizList;
