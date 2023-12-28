import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql";

export const useRepository = (repositoryId) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: repositoryId },
  });

  return { repository: data?.repository, error, loading };
};
