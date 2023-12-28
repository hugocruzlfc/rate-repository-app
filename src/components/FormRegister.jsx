import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { CustomText } from "./CustomText";
import { createUserValidationSchema } from "../utils";

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0366d6",
    borderRadius: 4,
    alignItems: "center",
  },
});

export const FormRegister = ({ onSubmit, ...props }) => (
  <Formik
    initialValues={{ username: "", password: "", passwordConfirmation: "" }}
    onSubmit={(values) => {
      onSubmit(values);
    }}
    validationSchema={createUserValidationSchema}
  >
    {({ handleSubmit }) => (
      <View>
        <FormikTextInput
          name="username"
          placeholder="Username"
          type="text"
        />
        <FormikTextInput
          name="password"
          placeholder="Password"
          type="text"
        />
        <FormikTextInput
          name="passwordConfirmation"
          placeholder="Confirm Password"
          type="text"
        />
        <Pressable
          style={styles.button}
          onPress={handleSubmit}
        >
          <CustomText>Submit</CustomText>
        </Pressable>
      </View>
    )}
  </Formik>
);
