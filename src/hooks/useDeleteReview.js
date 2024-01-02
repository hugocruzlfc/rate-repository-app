import { useMutation } from "@apollo/client";
import { DELETE_REVIEW, GET_USER } from "../graphql";

export const useDeleteReview = () => {
  const [mutate, { data, error }] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_USER }],
  });

  const deleteReview = async (reviewId) => {
    try {
      await mutate({
        variables: { deleteReviewId: reviewId },
      });

      if (!error) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [deleteReview];
};
