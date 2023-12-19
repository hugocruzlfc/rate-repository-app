import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { ItemSeparator } from "./ItemSeparator";

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories?.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      // other props
    />
  );
};

export default RepositoryListContainer;
