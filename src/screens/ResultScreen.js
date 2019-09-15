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
        <Text>
          Time taken: {time.min !== 0 ? `${time.min} minutes and` : null}{" "}
          {time.sec} seconds
        </Text>
        <Button title="Play again" onPress={this.startQuiz} />
      </View>
    );
    //   <ScrollView style={styles.container}>
    //     {/* Heading */}
    //     <View
    //       style={{
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         width: '100%',
    //         paddingTop: 100,
    //         paddingBottom: 100,
    //       }}
    //     >
    //       <Text
    //         style={{
    //           fontFamily: 'Century-Gothic-Bold',
    //           fontSize: 25,
    //           textAlign: 'center',
    //         }}
    //       >
    //         Your Score
    //       </Text>
    //       <Text
    //         style={{
    //           fontFamily: 'Century-Gothic-Bold',
    //           fontSize: 50,
    //           textAlign: 'center',
    //         }}
    //       >
    //         {score * 10}%
    //       </Text>
    //       <Text
    //         style={{
    //           fontFamily: 'Century-Gothic',
    //           fontSize: 25,
    //           textAlign: 'center',
    //         }}
    //       >
    //         Time: {time.minutes > 9 ? time.minutes : `0${time.minutes}`}:
    //         {time.seconds > 9 ? time.seconds : `0${time.seconds}`}
    //       </Text>
    //     </View>

    //     <View
    //       style={{
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         width: '100%',
    //       }}
    //     >
    //       <Text
    //         style={{
    //           alignSelf: 'center',
    //           fontFamily: 'Century-Gothic-Bold',
    //           fontSize: 20,
    //           marginBottom: 5,
    //         }}
    //       >
    //         Details
    //       </Text>
    //       {/* Questions */}
    //       {answers.map((ans, index) => (
    //         <View
    //           key={Math.random()}
    //           style={{
    //             width: '100%',
    //             padding: 10,
    //             borderLeftWidth: 8,
    //             marginBottom: 1,
    //             borderLeftColor: ans.score
    //               ? 'lightgreen'
    //               : 'rgba(255, 150, 150, 1)',
    //             backgroundColor: 'rgba(0, 0, 0, 0.02)',
    //           }}
    //         >
    //           {/* Ques */}
    //           <Text
    //             style={{
    //               fontSize: 18,
    //               width: '100%',
    //               fontFamily: 'Century-Gothic-Bold',
    //             }}
    //           >
    //             {index + 1 < 10 ? `0${index + 1}` : index + 1}: {ans.question}
    //           </Text>
    //           {/* correct ans */}
    //           <Text
    //             style={{
    //               fontSize: 18,
    //               width: '100%',
    //               fontFamily: 'Century-Gothic',
    //             }}
    //           >
    //             Correct: {ans.correct_answer}
    //           </Text>
    //           {/* your ans */}
    //           <Text
    //             style={{
    //               fontSize: 18,
    //               width: '100%',
    //               fontFamily: 'Century-Gothic',
    //             }}
    //           >
    //             Your&apos;s: {ans.userAnswer}
    //           </Text>
    //         </View>
    //       ))}
    //     </View>

    //     {/* play again */}
    //     <View
    //       style={{
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         width: '100%',
    //         paddingTop: 50,
    //         paddingBottom: 100,
    //       }}
    //     >
    //       <Button onPress={this.startQuiz} title="Play Again" color="#008080" />
    //     </View>
    //   </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
