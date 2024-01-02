import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql";

export const useMe = () => {
  const { data, error, loading, client, fetchMore } = useQuery(GET_USER);

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_USER,

      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          me: {
            ...fetchMoreResult.me,
            reviews: {
              ...fetchMoreResult.me.reviews,
              edges: [
                ...previousResult.me.reviews.edges,
                ...fetchMoreResult.me.reviews.edges,
              ],
            },
          },
        };

        return nextResult;
      },
    });
  };

  return { data, client, error, loading, fetchMore: handleFetchMore };
};
