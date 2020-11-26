import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

export const loadAllAssests = [
  Asset.loadAsync([require("../assets/logo.png")]),
  Font.loadAsync({
    //   ...Icon.Ionicons.font, // This is the font that we are using for our tab bar
    "Interstate-Regular": require("../assets/fonts/Interstate-Regular.ttf"),
    //   bold: require('../assets/fonts/CircularStd-Bold.ttf'),
  }),
];
