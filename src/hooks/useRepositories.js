import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql";

export const useRepositories = (
  first,
  orderBy,
  orderDirection,
  searchKeyword
) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { first, orderBy, orderDirection, searchKeyword },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first,
        orderBy,
        orderDirection,
        searchKeyword,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repositories: data?.repositories,
    error,
    loading,
    fetchMore: handleFetchMore,
  };
};
