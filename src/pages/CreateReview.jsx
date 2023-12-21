import React from "react";
import { View, StyleSheet } from "react-native";
import { CreateReviewForm, CustomText } from "../components";
import { useCreateReview } from "../hooks";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export const CreateReview = () => {
  const [createReview, loading] = useCreateReview();

  const onSubmit = async (values) => {
    console.log(values);
    const { ownerName, repositoryName, rating, review } = values;
    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        review,
      });
      console.log(data);
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
        Create a review
      </CustomText>
      <CreateReviewForm onSubmit={onSubmit} />
    </View>
  );
};

// {

//   createReview: {

//     rating: 5,

//     text: 'Este es mi primer review!!! Kalle',

//     createdAt: '2023-12-21T18:36:10.297Z',

//     repositoryId: 'zeit.swr',

//     __typename: 'Review'

//   }

// }
