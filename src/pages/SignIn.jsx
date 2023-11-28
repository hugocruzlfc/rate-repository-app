import React from "react";
import { View, StyleSheet } from "react-native";
import { FormLogin, CustomText } from "../components";
import { useSignIn } from "../hooks";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { authenticate } = await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <CustomText
        fontWeight="bold"
        fontSize="subheading"
      >
        Sign In
      </CustomText>
      <FormLogin onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
