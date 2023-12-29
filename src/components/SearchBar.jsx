import React from "react";
import { SearchBar } from "@rneui/base";
import { View, StyleSheet } from "react-native";
import { useRepositoryContext } from "../context";

export const Search = () => {
  const { loading, searchValue, onChangeSearch } = useRepositoryContext();

  return (
    <View style={styles.view}>
      <SearchBar
        containerStyle={{
          backgroundColor: "#fff",
          borderWidth: 0,
          borderRadius: 5,
          margin: 0,
          padding: 0,
          width: "100%",
        }}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderWidth: 0,
          borderRadius: 5,
          margin: 0,
          padding: 0,
          width: "100%",
        }}
        lightTheme
        platform="default"
        placeholder="Type Here..."
        onChangeText={onChangeSearch}
        value={searchValue}
        showLoading={loading}
        round
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
