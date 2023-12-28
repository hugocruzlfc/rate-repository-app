import React from "react";
import { useRepositoryContext } from "../context";
import { RepositoryListContainer, FilterRepository } from "../components";

export const RepositoryList = () => {
  const { repositories } = useRepositoryContext();

  return (
    <>
      <FilterRepository />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};
