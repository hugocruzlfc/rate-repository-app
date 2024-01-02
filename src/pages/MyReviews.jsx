import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useAuthStorage } from "../context";
import { Review, ItemSeparator } from "../components";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const MyReviews = () => {
  const { user, onEndReach } = useAuthStorage();

  const reviewsNodes = user
    ? user.me.reviews.edges.map((edge) => edge.node)
    : [];

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reviewsNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default MyReviews;
