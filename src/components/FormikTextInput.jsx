import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import { CustomText } from "./CustomText";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
  },
  input: {
    borderWidth: 1,
    borderColor: "#c0c0c0",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        secureTextEntry={name === "password"}
        {...props}
      />
      {showError && (
        <CustomText style={styles.errorText}>{meta.error}</CustomText>
      )}
    </>
  );
};

export default FormikTextInput;
