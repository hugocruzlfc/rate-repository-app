import React from "react";
import { StyleSheet, View } from "react-native";
import { format } from "date-fns";
import { CustomText } from "./CustomText";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  rate: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#0366d6",
    textAlign: "center",
    fontWeight: "bold",
    color: "#0366d6",
    paddingTop: 13,
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    maxWidth: "80%",
    paddingLeft: 10,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
  },
  date: {
    color: "#A4A3A3",
  },
});

export const Review = ({ review }) => {
  const formatDate = format(review?.createdAt, "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <CustomText style={styles.rate}>{review.rating}</CustomText>
      <View style={styles.bodyContainer}>
        <CustomText style={styles.name}>{review.user.username}</CustomText>
        <CustomText style={styles.date}>{formatDate}</CustomText>
        <CustomText style={styles.text}>{review.text}</CustomText>
      </View>
    </View>
  );
};
