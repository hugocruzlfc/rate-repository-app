import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql";

export const useCreateReview = () => {
  const [mutate, { loading }] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    ownerName,
    repositoryName,
    rating,
    review,
  }) => {
    try {
      const { data } = await mutate({
        variables: {
          review: { ownerName, repositoryName, rating, text: review },
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return [createReview, loading];
};
