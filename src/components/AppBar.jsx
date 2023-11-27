import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTap from "./AppBarTap";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
    display: "flex",
    flexDirection: "row",
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTap
          label="Repositories"
          path="/"
        />
        <AppBarTap
          label="Details"
          path="/details"
        />
        <AppBarTap
          label="Statistics"
          path="/statistics"
        />
        <AppBarTap
          label="About Us"
          path="/about"
        />
        <AppBarTap
          label="Signin"
          path="/signin"
        />

        <AppBarTap
          label="Logout"
          path="/"
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
