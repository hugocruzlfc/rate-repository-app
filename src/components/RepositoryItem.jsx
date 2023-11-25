import React from "react";
import { View, Text } from "react-native";

export const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>✭: {item.stargazersCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Ratings: {item.ratingAverage}</Text>
    </View>
  );
};
