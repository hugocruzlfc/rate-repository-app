import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { CustomText } from "./CustomText";
import { formCreateReviewValidation } from "../utils";

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0366d6",
    borderRadius: 4,
    alignItems: "center",
  },
});

const INITIAL_VALUES = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};

export const CreateReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={formCreateReviewValidation}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
            type="text"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
            type="text"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
            type="number"
          />
          <FormikTextInput
            name="review"
            placeholder="Review"
            type="text"
            multiline
          />

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
          >
            <CustomText>Create</CustomText>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};
