import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Quiz: {
    screen: QuizScreen
  },
  initialRouteName: "Home"
});

const App = createAppContainer(MainNavigator);
export default App;
