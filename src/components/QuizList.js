import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class QuizList extends React.Component {
  state = {};

  render() {
    const { data } = this.props;

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text style={[styles.questionBody, styles.verticalSpace]}>
              {item.question}
            </Text>
            <View>
              <Text>{(item.correct_answer, item.incorrect_answers)}</Text>
              {}
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
