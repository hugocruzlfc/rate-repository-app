import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === "android" ? "green" : "blue",
  },
});

export const CurrentPlatform = () => {
  return <Text style={styles.text}>Your platform is: {Platform.OS}</Text>;
};
