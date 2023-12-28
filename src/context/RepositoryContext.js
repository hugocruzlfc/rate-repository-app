import React, { useContext, useState } from "react";
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
  const [filter, setFilter] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const { repositories, loading, error } = useRepositories(
    filter.orderBy,
    filter.orderDirection
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const setRepositoriesFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        setRepositoriesFilter,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
