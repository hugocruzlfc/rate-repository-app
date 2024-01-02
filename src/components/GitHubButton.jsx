import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "./CustomText";
import { useOpenUrl } from "../hooks";

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
  const openUrlInNewTab = useOpenUrl(url);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={openUrlInNewTab}
        style={styles.button}
      >
        <CustomText style={styles.text}>Open in GitHub</CustomText>
      </Pressable>
    </View>
  );
};
