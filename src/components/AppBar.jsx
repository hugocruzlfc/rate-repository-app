import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTap from "./AppBarTap";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,

    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTap label="Repositories" />
    </View>
  );
};

export default AppBar;
