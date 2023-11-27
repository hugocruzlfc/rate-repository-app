import { Platform } from "react-native";

const FONT_FAMILY = {
  android: "Roboto",
  ios: "Arial",
  web: "System",
};

export function getCurrentFontFamily() {
  const currentPlatform = Platform.OS;
  return FONT_FAMILY[currentPlatform];
}
