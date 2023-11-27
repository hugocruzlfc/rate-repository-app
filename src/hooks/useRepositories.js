import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SERVER_URL } from "../utils";
import { GET_REPOSITORIES } from "../graphql";

export const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);

  return { repositories: data?.repositories, error, loading };
};
