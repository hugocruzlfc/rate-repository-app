import React, { useContext, useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { useMe } from "../hooks";
import { authStorage, STORAGE_KEY } from "../utils";

export const AuthStorageContext = React.createContext();

export const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);
  if (context === undefined) {
    throw new Error("useAuthStorage must be used within a AuthStorageProvider");
  }
  return context;
};

export const AuthStorageProvider = ({ children }) => {
  const { data, loading, client } = useMe();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleLogout = async () => {
    await authStorage.remove({ key: STORAGE_KEY.AUTH });
    client.resetStore();
  };

  return (
    <AuthStorageContext.Provider
      value={{
        user,
        loading,
        handleLogout,
      }}
    >
      {children}
    </AuthStorageContext.Provider>
  );
};
