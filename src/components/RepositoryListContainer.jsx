import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { ItemSeparator } from "./ItemSeparator";
import { CustomText } from "./CustomText";
import { FilterRepository } from "./FilterRepository";
import { v4 as uuidv4 } from "uuid";

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
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
        keyExtractor={() => uuidv4()}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        // other props
      />
    </View>
  );
};
