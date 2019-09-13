import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import base64 from "base-64";
// import QuizOption from "./QuizOption";

class QuizList extends React.Component {
  state = {
    questions: [],
    asked: 0,
    currentQuestion: "",
    options: {
      label: "No Options!",
      disabled: true
    },
    userAnswer: 0,
    score: 0
  };

  componentDidMount() {
    this.renderQuestion();
  }

  renderQuestion = () => {
    const { navigation } = this.props;
    let { questions } = this.state;
    const { asked } = this.state;

    questions = navigation.getParam("questions", []);

    if (!questions || questions.length === 0) {
      navigation.navigate("quiz");
    }

    //Grabbed a single question data
    const quesToAsk = questions[asked];

    //Grabbing single QUES
    const currentQuestion = base64.decode(quesToAsk.question);

    //Grabbing Options of selected QUES
    const optionList = quesToAsk.incorrect_answers;
    optionList.push(quesToAsk.correct_answer);

    //Preparing final options
    const options = optionList.map((option, index) => ({
      label: base64.decode(option),
      value: index
    }));

    this.setState({
      questions,
      currentQuestion,
      options
    });
  };

  nextQuestion = () => {
    const { questions, options, asked, userAnswer } = this.state;

    // const quesAsked = questions[asked];

    // if (options[userAnswer].label === base64.decode(quesAsked.correct_answer)) {
    //   this.setState({ score: score + 10 });
    // }

    console.log(asked);
    this.setState({ asked: asked + 1 }, () => {
      this.renderQuestion();
    });
    console.log(asked);
  };

  render() {
    const { currentQuestion, options } = this.state;

    return (
      <View style={styles.container}>
        <Text>{this.state.asked} of 3</Text>
        <Text>{currentQuestion}</Text>
        <RadioForm
          radio_props={options}
          onPress={value => this.setState({ userAnswer: value })}
        />
        <Button title="Next" onPress={() => this.nextQuestion()} />
        {/* <Text style={[styles.questionBody, styles.verticalSpace]}>
          {question}
          {option.map(op => {
            <Text>{op}</Text>;monitr
          })}
        </Text>
        <View>
          <Text>{asked}</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  verticalSpace: {
    marginVertical: 10
  },
  questionBody: {
    padding: 5,
    fontSize: 18,
    backgroundColor: "grey"
  }
});

export default QuizList;
