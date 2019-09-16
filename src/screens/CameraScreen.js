import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import { StackActions, NavigationActions } from "react-navigation";
import * as Animatable from "react-native-animatable";

class CameraScreen extends React.Component {
  state = {
    cameraPermission: null,
    faceDetected: null
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      this.setState({ cameraPermission: true });
    } else {
      this.setState({ cameraPermission: false });
    }
  }

  onFacesDetected = ({ faces }) => {
    const { navigation } = this.props;
    if (faces[0]) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Quiz" })]
      });
      navigation.dispatch(resetAction);
      console.log("face detected");
    }

    console.log("face not detected");
  };

  render() {
    const { cameraPermission } = this.state;
    if (cameraPermission === false) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>This app requires camera access to dectect your face.</Text>
          <Text>Allow camera access to proceed further</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
              this.props.navigation.push("Camera");
            }}
          >
            <Text>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.front}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.none,
            runClassifications: FaceDetector.Constants.Classifications.none
          }}
          onFacesDetected={this.onFacesDetected}
          ref={ref => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Animatable.Text
              style={{ color: "#F5FFFA", fontSize: 20 }}
              animation="fadeIn"
              iterationCount={"infinite"}
              direction="alternate"
            >
              Detecting face. Keep your camera still!
            </Animatable.Text>
            {/* <TouchableOpacity
              style={{
                widht: 1000,
                backgroundColor: "blue",
                borderRadius: 10
              }}
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                });
              }}
            >
              
            </TouchableOpacity> */}
          </View>
        </Camera>
      );
    }
  }
}

export default CameraScreen;
