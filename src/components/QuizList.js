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

  static navigationOptions = {
    header: null
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

  nextQuestion = end => {
    const { questions, options, asked, userAnswer, score } = this.state;

    const quesAsked = questions[asked];

    if (options[userAnswer].label === base64.decode(quesAsked.correct_answer)) {
      this.setState({ score: score + 10 });
    }
    console.log(score);

    console.log(this.state.score);
    this.setState({ asked: asked + 1 }, () =>
      !end ? this.renderQuestion() : this.showResult()
    );
  };

  showResult = () => {
    const { navigation } = this.props;

    navigation.navigate("Result", { score: this.state.score });
  };

  render() {
    const { currentQuestion, options, asked, questions } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.infoDisplay}>
          <View>
            <Text>
              {asked + 1} of {questions.length}
            </Text>
          </View>
          <View>
            <Text>00:10</Text>
          </View>
        </View>

        <View style={styles.quizDialog}>
          <View style={styles.questionBody}>
            <Text style={styles.questionText}>{currentQuestion}</Text>
          </View>

          <View style={styles.optionBody}>
            <RadioForm
              radio_props={options}
              onPress={value => this.setState({ userAnswer: value })}
            />
          </View>
        </View>
        {questions.length === asked + 1 ? (
          <Button title="Finish" onPress={() => this.nextQuestion("end")} />
        ) : (
          <Button title="Next" onPress={() => this.nextQuestion()} />
        )}
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
  infoDisplay: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  quizDialog: {
    flex: 3,
    width: "90%",
    // height: "80%",
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 60
  },
  questionBody: {
    // padding: 5,

    marginBottom: 15,
    backgroundColor: "#e9ecf2"
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10
  },
  optionBody: {
    marginLeft: 20
  }
});

export default QuizList;
