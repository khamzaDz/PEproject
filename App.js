import { StyleSheet } from "react-native";
import { gStyle } from "./styles/style";
import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import Main from './components/main';

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/fonts/YoungSerif-Regular.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const handleLoadingError = (error) => {
    console.warn(error);
  };

  if (fontLoaded) {
    return (
     <Main />
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFontLoaded(true)}
        onError={handleLoadingError}
      />
    );
  }
}

const styles = StyleSheet.create({});
