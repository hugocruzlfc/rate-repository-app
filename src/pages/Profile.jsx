import React from "react";
import { View, StyleSheet } from "react-native";
import { CurrentPlatform, Me } from "../components";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const Profile = () => {
  return (
    <View style={styles.container}>
      <h1>Profile</h1>
      <CurrentPlatform />
      <Me />
    </View>
  );
};

export default Profile;
