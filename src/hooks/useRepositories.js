import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql";

export const useRepositories = (orderBy, orderDirection) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection },
  });

  return { repositories: data?.repositories, error, loading };
};
