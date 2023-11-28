import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    margin: 5,
    color: theme.colors.textSecondary,

    // ...
  },
  // ...
});

const AppBarTap = ({ label, path, onClick }) => {
  return (
    <Pressable>
      <Link
        to={path}
        onPress={onClick}
      >
        <CustomText style={styles.tab}>{label}</CustomText>
      </Link>
    </Pressable>
  );
};

export default AppBarTap;
