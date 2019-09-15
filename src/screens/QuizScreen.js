import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator
} from "react-native";
import axios from "axios";

import Header from "../components/Header";
import QuizList from "../components/QuizList";

class QuizScreen extends React.Component {
  state = {
    loading: false
  };

  static navigationOptions = {
    header: null
  };

  startQuiz = () => {
    const { loading } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: !loading });
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=base64"
    )
      .then(response => response.json())
      .then(({ results }) => {
        this.setState({ loading: false });

        navigation.navigate("Questions", { questions: results });
      })
      .catch(err => {
        console.log("ERR->", err);
        alert(`ERROR: ${err.message}. Try again`);
        this.setState({ loading: false });
      });
  };
  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#008080" />
        ) : (
          <Button
            onPress={() => this.startQuiz()}
            title="Start Quiz"
            color="#008080"
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    padding: 25,
    color: "white",
    alignItems: "center",
    backgroundColor: "#e74c3c",
    borderRadius: 5
  }
});

export default QuizScreen;
