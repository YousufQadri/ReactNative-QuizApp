import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
export default class ResultScreen extends React.Component {
  // state = {
  //   answers: [],
  //   score: 0,
  //   time: {
  //     minutes: 0,
  //     seconds: 0
  //   }
  // };

  //   componentDidMount() {
  //     const { navigation } = this.props;

  //     const answers = navigation.getParam('answers', []);
  //     const score = navigation.getParam('score', 0);
  //     const time = navigation.getParam('time', {
  //       minutes: 0,
  //       seconds: 0,
  //     });

  //     this.setState({ answers, score, time });
  //   }

  static navigationOptions = {
    header: null
  };

  startQuiz = () => {
    this.props.navigation.navigate("Quiz");
  };

  render() {
    const score = this.props.navigation.getParam("score", 0);
    let total = this.props.navigation.getParam("total", 0);
    const time = this.props.navigation.getParam("time", 0);
    total = total.length * 10;

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>You scored...</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>
          {score} out of {total}
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Time taken: {time.min !== 0 ? `${time.min} minutes and` : null}{" "}
          {time.sec} seconds
        </Text>
        <Button title="Try again" onPress={this.startQuiz} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
