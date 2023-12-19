import React from "react";
import { Linking, Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "./CustomText";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  button: {
    backgroundColor: "#0366d6",

    padding: 5,
    borderRadius: 3,
    alignSelf: "flex-center",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export const GitHubButton = ({ url }) => {
  const onPressLearnMore = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressLearnMore}
        style={styles.button}
      >
        <CustomText style={styles.text}>Open in GitHub</CustomText>
      </Pressable>
    </View>
  );
};
