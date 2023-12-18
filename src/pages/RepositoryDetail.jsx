import React, { useMemo } from "react";
import { RepositoryItem } from "../components";
import { useParams } from "react-router-native";
import { useRepositoryContext } from "../context";
import { currentRepository } from "../utils";

export const RepositoryDetail = () => {
  const { id } = useParams();
  const { repositories } = useRepositoryContext();

  const currentItem = useMemo(
    () => currentRepository(repositories?.edges, id),
    [repositories, id]
  );

  return <RepositoryItem item={currentItem.node} />;
};
