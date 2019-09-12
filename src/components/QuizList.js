import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import QuizOption from "./QuizOption";

class QuizList extends React.Component {
  state = {};

  render() {
    const { data } = this.props;
    // const options = data.incorrect_answers;
    // options.push(data.correct_answer);

    return (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Text style={[styles.questionBody, styles.verticalSpace]}>
              {item.question}
            </Text>
            <View>
              <Text>{item.incorrect_answers}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.question}
      />
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
