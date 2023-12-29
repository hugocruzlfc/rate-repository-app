import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { ItemSeparator } from "./ItemSeparator";
import { CustomText } from "./CustomText";
import { useRepositoryContext } from "../context";
import { FilterRepository } from "./FilterRepository";

export const RepositoryListContainer = () => {
  const { repositories } = useRepositoryContext();

  const repositoryNodes = repositories
    ? repositories?.edges.map((edge) => edge.node)
    : [];

  if (repositories.edges.length === 0) {
    return (
      <View>
        <CustomText>Not match criteria!!</CustomText>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={<FilterRepository />}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(item) => item.id}
        // other props
      />
    </View>
  );
};
