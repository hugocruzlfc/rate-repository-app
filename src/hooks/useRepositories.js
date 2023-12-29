import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql";

export const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection, searchKeyword },
  });

  return { repositories: data?.repositories, error, loading };
};
