import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SELECT_FILTER_REPOSITORIES } from "../constants";
import { useRepositoryContext } from "../context";
import { repositoriesFilterParser } from "../utils";

export const FilterRepository = () => {
  const { setRepositoriesFilter } = useRepositoryContext();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleOnChange = (value) => {
    const filter = repositoriesFilterParser(value);
    setValue(value);
    setRepositoriesFilter(filter);
    setIsFocus(false);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={SELECT_FILTER_REPOSITORIES}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Filter by" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => handleOnChange(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  dropdown: {
    height: 30,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
