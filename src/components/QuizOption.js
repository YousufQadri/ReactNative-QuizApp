import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

const QuizOption = ({ options }) => {
  return (
    <View>{options}</View>
    // <FlatList
    //   data={options.incorrect_answers}
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   renderItem={item => (
    //     <TouchableOpacity onPress={this._onPress}>
    //       <View style={styles.quizOption}>
    //         <Text style={styles.quizOptionDescription}>{options}</Text>
    //       </View>
    //     </TouchableOpacity>
    //   )}
    // />
    //
  );
};

const styles = StyleSheet.create({
  quizOption: {
    flex: 1,
    //width: '100%',
    minHeight: 32,
    marginTop: 4,
    marginBottom: 4,
    marginRight: 5,
    backgroundColor: "rgba(64, 64, 64,0.3)",
    borderRadius: 8
  },

  quizOptionDescription: {
    flex: 1,
    padding: 12,
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0
  }
});

export default QuizOption;
