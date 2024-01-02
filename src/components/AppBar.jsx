import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTap from "./AppBarTap";
import theme from "../theme";
import { useAuthStorage } from "../context";

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
  const { user, loading, handleLogout } = useAuthStorage();

  if (loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTap
          label="Repositories"
          path="/"
        />

        {!user?.me ? (
          <>
            <AppBarTap
              label="Signin"
              path="/signin"
            />
            <AppBarTap
              label="Signup"
              path="/signup"
            />
          </>
        ) : (
          <>
            <AppBarTap
              label="Details"
              path="/details"
            />
            <AppBarTap
              label="Create Review"
              path="/create-review"
            />
            <AppBarTap
              label="My Reviews"
              path="/my-reviews"
            />
            <AppBarTap
              label="About Us"
              path="/about"
            />
            <AppBarTap
              label="Me"
              path="/profile"
            />
            <AppBarTap
              label="Logout"
              path="/"
              onClick={handleLogout}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
