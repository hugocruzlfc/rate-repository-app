import React from "react";
import { useAuthStorage } from "../context";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  reviews: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
    display: "flex",
    justifyContent: "center",
  },
  userName: {
    textTransform: "capitalize",
  },
});

export const Me = () => {
  const { user, loading } = useAuthStorage();

  if (loading) {
    return null;
  }

  return (
    <View>
      <CustomText style={styles.userName}>
        User Name: {user?.me?.username}
      </CustomText>
      <CustomText>Review Count: {user?.me?.reviewCount}</CustomText>
      <View>
        <CustomText style={styles.reviews}>Reviews</CustomText>
        <CustomText>Total Repos:{user?.me?.reviews?.totalCount} </CustomText>
      </View>
    </View>
  );
};
