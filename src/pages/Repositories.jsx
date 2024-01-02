import React from "react";
import { RepositoryListContainer, Search } from "../components";
import { useRepositoryContext } from "../context";

export const Repositories = () => {
  const { repositories, fetchMore } = useRepositoryContext();

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <Search />
      <RepositoryListContainer
        repositories={repositories}
        onEndReach={onEndReach}
      />
    </>
  );
};
