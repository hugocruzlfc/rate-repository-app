import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { RepositoryItem } from "../components";
import { useRepositories } from "../hooks";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
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

export default RepositoryList;
