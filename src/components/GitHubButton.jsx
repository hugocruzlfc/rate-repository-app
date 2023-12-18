import React from "react";
import { Button, Linking } from "react-native";

export const GitHubButton = ({ url }) => {
  const onPressLearnMore = () => {
    Linking.openURL(url);
  };
  return (
    <Button
      onPress={onPressLearnMore}
      title="Open in GitHub"
      color="#0366d6"
      aria-label="Learn more about this purple button"
    />
  );
};
