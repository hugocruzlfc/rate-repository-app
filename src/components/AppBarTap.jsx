import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    margin: 2,
    color: theme.colors.textSecondary,

    // ...
  },
  // ...
});

const AppBarTap = ({ label }) => {
  return (
    <TouchableWithoutFeedback>
      <CustomText style={styles.tab}>{label}</CustomText>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTap;
