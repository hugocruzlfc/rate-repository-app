import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import { SignIn, Details, RepositoryList, Statistics, AboutUs } from "../pages";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<RepositoryList />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
        />
        <Route
          path="/details"
          element={<Details />}
        />
        <Route
          path="/statistics"
          element={<Statistics />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/logout"
          element={<Details />}
        />
      </Routes>
    </View>
  );
};

export default Main;
