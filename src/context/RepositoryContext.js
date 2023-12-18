import React, { useContext } from "react";
import { useRepositories } from "../hooks";
import { Text } from "react-native";

export const RepositoryContext = React.createContext();

export const useRepositoryContext = () => {
  const context = useContext(RepositoryContext);
  if (context === undefined) {
    throw new Error(
      "useRepositoryContext must be used within a RepositoryContextProvider"
    );
  }
  return context;
};

export const RepositoryProvider = ({ children }) => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
