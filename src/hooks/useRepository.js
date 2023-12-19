import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql";

export const useRepository = (repositoryId) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
  });

  return { repository: data?.repository, error, loading };
};
