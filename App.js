import React, { useState } from "react";
import * as Font from "expo-font";
import  AppLoading from "expo-app-loading";
import Navigator from './routes/drawerMenu';

const getFont = () =>
  Font.loadAsync({
    "prompt-light": require("./assets/fonts/Prompt-Light.ttf"),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
