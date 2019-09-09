import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";

class Camera extends Component {
  state = {
    cameraPermission: null,
    type: Camera.Constants.Type.back,
    isCamera: false,
    faceDetected: null
  };

  openCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      this.setState({ cameraPermission: true, isCamera: true });
    } else {
      this.setState({ cameraPermission: false, isCamera: false });
    }
  };

  getSnap = async () => {
    let photo = await this.camera.takePictureAsync();
    const option = { mode: FaceDetector.Constants.Mode.fast };
    const result = await FaceDetector.detectFacesAsync(photo.uri, option);
    const validFace = result.faces.length > 0 ? true : false;
    this.setState({
      photo: photo.uri,
      isCamera: false,
      faceDetected: validFace
    });
  };
  render() {
    if (isCamera === null) {
      return <View />;
    } else if (isCamera === false) {
      return (
        <View>
          <Text>No camera access</Text>
        </View>
      );
    } else {
      return (
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          ref={ref => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.5,
                alignSelf: "flex-end",
                alignItems: "center"
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
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.getSnap}
              style={{
                flex: 0.5,
                alignSelf: "flex-end",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                Capture
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      );
    }
  }
}

export default Camera;
