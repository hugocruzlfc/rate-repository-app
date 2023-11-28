import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

export const STORAGE_KEY = {
  AUTH: "auth",
};

export const authStorage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: Platform.OS === "web" ? window.localStorage : AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24, // 1 day

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  },
});

export const getToken = async () => {
  try {
    const { token } = await authStorage.load({
      key: STORAGE_KEY.AUTH,
    });
    return token;
  } catch (err) {
    console.warn(err.message);
    switch (err.name) {
      case "NotFoundError":
        // TODO;
        return null;
      case "ExpiredError":
        // TODO
        return null;
    }
  }
};

// https://github.com/sunnylqm/react-native-storage
