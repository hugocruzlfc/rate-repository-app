import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "./CustomText";
import { useOpenUrl } from "../hooks";
import { useDeleteReview } from "../hooks";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonView: {
    backgroundColor: "#0366d6",
  },
  buttonDelete: {
    backgroundColor: "#d73a4a",
  },
});

export const ActionsReviews = ({ repositoryUrl, reviewId }) => {
  const openUrlInNewTab = useOpenUrl(repositoryUrl);
  const [deleteReview] = useDeleteReview();

  const handleDelete = () => {
    deleteReview(reviewId);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.buttonView]}
        onPress={openUrlInNewTab}
      >
        <CustomText color="neutral">View Repository</CustomText>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonDelete]}
        onPress={handleDelete}
      >
        <CustomText color="neutral">Delete Review</CustomText>
      </Pressable>
    </View>
  );
};
