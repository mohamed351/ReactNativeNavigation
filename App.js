import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading} from 'expo'
import MealNavigator from './navigations/MealNavigationFile';


const fetchFonts = () => {
  Font.loadAsync({
    'Robotics': require("./assets/fonts/Roboto-Regular.ttf"),
    'Robotics-bold':require("./assets/fonts/Roboto-Bold.ttf")
  });
}
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
      return <AppLoading startAsync={fetchFonts} onFinish={()=> setFontLoaded(true)}></AppLoading>
  }
  return (
    
    <MealNavigator/>
  );
}


