import React from "react";
import { View, StyleSheet } from "react-native";
import { FormRegister, CustomText } from "../components";
import { useSignUp, useSignIn } from "../hooks";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signUp({ username, password });
      if (data) {
        const { authenticate } = await signIn({ username, password });
        if (authenticate) {
          navigate("/");
        }
      }
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
        Sign Up
      </CustomText>
      <FormRegister onSubmit={onSubmit} />
    </View>
  );
};

export default SignUp;
