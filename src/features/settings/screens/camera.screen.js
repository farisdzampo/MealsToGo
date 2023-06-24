import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ErrorText } from "../../account/components/account.styles";
import { View, TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <ErrorText>No access to camera</ErrorText>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(cam) => (cameraRef.current = cam)}
        type={CameraType.front}
      ></ProfileCamera>
    </TouchableOpacity>
  );
};
