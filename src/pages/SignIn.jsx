import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../components/CustomText";
import { FormLogin } from "../components";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <CustomText
        fontWeight="bold"
        fontSize="subheading"
      >
        Sign In
      </CustomText>
      <FormLogin />
    </View>
  );
};

export default SignIn;
