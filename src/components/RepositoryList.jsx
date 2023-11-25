import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { repositories } from "../data";
import { RepositoryItem } from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      // other props
    />
  );
};

export default RepositoryList;
