import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";
import QuizList from "./src/components/QuizList";
import ResultScreen from "./src/screens/ResultScreen";
import CameraScreen from "./src/screens/CameraScreen";

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Camera: {
    screen: CameraScreen
  },
  Quiz: {
    screen: QuizScreen
  },
  Questions: {
    screen: QuizList
  },
  Result: {
    screen: ResultScreen
  },
  initialRouteName: "Questions"
});

const App = createAppContainer(MainNavigator);
export default App;
