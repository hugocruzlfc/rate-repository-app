import React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { CustomText } from "./CustomText";
import { GitHubButton } from "./GitHubButton";
import { useNavigate, useParams } from "react-router-native";

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
    marginBottom: 10,
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
  const navigate = useNavigate();
  const { id } = useParams();

  const onPressFunction = () => {
    navigate(`/repository/${item.id}`);
  };

  return (
    <Pressable onPress={onPressFunction}>
      <View
        style={styles.container}
        onT
      >
        <View style={styles.bodyContainer}>
          <Image
            style={styles.bodyLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />
          <View style={styles.bodyDescription}>
            <CustomText
              style={[styles.bodyName, styles.bodyDescriptionItem]}
              testID="fullName"
            >
              {item.fullName}
            </CustomText>
            <CustomText
              style={styles.bodyDescriptionItem}
              testID="description"
            >
              {item.description}
            </CustomText>
            <CustomText
              style={[styles.bodyDescriptionItem, styles.bodyLanguage]}
              testID="language"
            >
              {item.language}
            </CustomText>
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <View style={styles.bodyFooterItem}>
            <CustomText
              style={styles.bodyName}
              testID="stargazersCount"
            >
              {item.stargazersCount}
            </CustomText>
            <CustomText>⭐️</CustomText>
          </View>
          <View style={styles.bodyFooterItem}>
            <CustomText
              style={styles.bodyName}
              testID="forksCount"
            >
              {item.forksCount}
            </CustomText>
            <CustomText>🍴</CustomText>
          </View>
          <View style={styles.bodyFooterItem}>
            <CustomText
              style={styles.bodyName}
              testID="reviewCount"
            >
              {item.reviewCount}
            </CustomText>
            <CustomText>👁</CustomText>
          </View>
          <View style={styles.bodyFooterItem}>
            <CustomText
              style={styles.bodyName}
              testID="ratingAverage"
            >
              {item.ratingAverage}
            </CustomText>
            <CustomText>📦</CustomText>
          </View>
        </View>
        {id && <GitHubButton url={item.url} />}
        {!id && <Separator />}
      </View>
    </Pressable>
  );
};
