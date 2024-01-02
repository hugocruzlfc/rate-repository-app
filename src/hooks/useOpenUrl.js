import { Linking } from "react-native";

export const useOpenUrl = (url) => {
  const openUrlInNewTab = () => {
    Linking.openURL(url);
  };

  return openUrlInNewTab;
};
