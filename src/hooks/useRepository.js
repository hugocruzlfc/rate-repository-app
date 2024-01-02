import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql";

const LOAD_LIMIT = 2;

export const useRepository = (repositoryId) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { first: LOAD_LIMIT, id: repositoryId },
  });

  console.log(data);

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first: LOAD_LIMIT,
        id: repositoryId,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repository: data?.repository,
    error,
    loading,
    fetchMore: handleFetchMore,
  };
};
