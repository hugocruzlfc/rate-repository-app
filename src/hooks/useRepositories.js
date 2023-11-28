import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql";

export const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);

  return { repositories: data?.repositories, error, loading };
};
