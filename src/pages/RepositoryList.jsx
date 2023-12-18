import React from "react";
import { useRepositoryContext } from "../context";
import { RepositoryListContainer } from "../components";

export const RepositoryList = () => {
  const { repositories } = useRepositoryContext();

  return <RepositoryListContainer repositories={repositories} />;
};
