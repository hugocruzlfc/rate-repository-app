import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,

    backgroundColor: "#C8C4C3",
    marginTop: 20,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;
