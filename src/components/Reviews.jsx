import React from "react";
import { FlatList } from "react-native";
import { useRepository } from "../hooks";
import { Review } from "./Review";
import { ItemSeparator } from "./ItemSeparator";

export const Reviews = ({ repositoryId }) => {
  const { repository, fetchMore } = useRepository(repositoryId);

  const reviewsNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (!repository) {
    return null;
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewsNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
