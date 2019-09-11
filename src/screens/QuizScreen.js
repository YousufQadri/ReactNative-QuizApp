import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import axios from "axios";

import Header from "../components/Header";
import QuizList from "../components/QuizList";

class QuizScreen extends React.Component {
  state = {
    quizData: [],
    responseData: false
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const response = await axios
      .get(
        "https://opentdb.com/api.php?amount=3&category=30&difficulty=easy&type=multiple"
      )
      .then(res => res.data.results);

    this.setState({ quizData: response, responseData: true });
  }
  render() {
    const { quizData, responseData } = this.state;
    console.log(quizData);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Quiz App" />
        </View>
        <View style={styles.body}>
          {responseData ? (
            <QuizList data={quizData} />
          ) : (
            <ActivityIndicator
              style={styles.container}
              size="large"
              color="#0000ff"
            />
          )}
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

export default QuizScreen;
