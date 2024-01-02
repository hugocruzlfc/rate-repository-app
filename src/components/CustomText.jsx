import React from "react";
import { Text, StyleSheet } from "react-native";
import { getCurrentFontFamily } from "../utils";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: getCurrentFontFamily(),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorNeutral: {
    color: theme.colors.neutral,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

export const CustomText = ({
  color,
  fontSize,
  fontWeight,
  style,
  testID = "custom_text",
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "neutral" && styles.colorNeutral,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return (
    <Text
      testID={testID}
      style={textStyle}
      {...props}
    />
  );
};
