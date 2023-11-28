import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql";

export const useMe = () => {
  const { data, error, loading, client } = useQuery(GET_USER);

  return { data, client, error, loading };
};
