import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 10,
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  bodyDescription: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingLeft: 10,
    maxWidth: "90%",
    whiteSpace: "normal",
    flexWrap: "wrap",
  },
  bodyDescriptionItem: {
    marginBottom: 10,
  },
  bodyLogo: {
    width: 50,
    height: 50,
  },
  bodyName: {
    fontWeight: "bold",
  },
  bodyLanguage: {
    backgroundColor: "#0366d6",
    color: "#ffffff",
    padding: 5,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
  bodyFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  bodyFooterItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  separator: {
    //marginVertical: 8,
    // borderBottomColor: "#737373",
    // borderBottomWidth: StyleSheet.hairlineWidth,
    height: 10,
    backgroundColor: "#C8C4C3",
    marginTop: 20,
  },
});

const Separator = () => <View style={styles.separator} />;

export const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Image
          style={styles.bodyLogo}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.bodyDescription}>
          <CustomText style={[styles.bodyName, styles.bodyDescriptionItem]}>
            {item.fullName}
          </CustomText>
          <CustomText style={styles.bodyDescriptionItem}>
            {item.description}
          </CustomText>
          <CustomText style={[styles.bodyDescriptionItem, styles.bodyLanguage]}>
            {item.language}
          </CustomText>
        </View>
      </View>
      <View style={styles.bodyFooter}>
        <View style={styles.bodyFooterItem}>
          <CustomText style={styles.bodyName}>
            {item.stargazersCount}
          </CustomText>
          <CustomText>⭐️</CustomText>
        </View>
        <View style={styles.bodyFooterItem}>
          <CustomText style={styles.bodyName}>{item.forksCount}</CustomText>
          <CustomText>🍴</CustomText>
        </View>
        <View style={styles.bodyFooterItem}>
          <CustomText style={styles.bodyName}>{item.reviewCount}</CustomText>
          <CustomText>👁</CustomText>
        </View>
        <View style={styles.bodyFooterItem}>
          <CustomText style={styles.bodyName}>{item.ratingAverage}</CustomText>
          <CustomText>📦</CustomText>
        </View>
      </View>
      <Separator />
    </View>
  );
};
