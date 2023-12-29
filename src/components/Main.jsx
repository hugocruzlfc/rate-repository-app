import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import {
  SignIn,
  Details,
  Repositories,
  AboutUs,
  Profile,
  RepositoryDetail,
  CreateReview,
  SignUp,
} from "../pages";

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
          element={<Repositories />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/details"
          element={<Details />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/repository/:id"
          element={<RepositoryDetail />}
        />
        <Route
          path="/create-review"
          element={<CreateReview />}
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
