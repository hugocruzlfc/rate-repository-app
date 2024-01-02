import React, { useContext, useState } from "react";
import { useRepositories } from "../hooks";
import { Text } from "react-native";
import { useDebounce } from "use-debounce";

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

const FIRST_REPOSITORIES = 10;

export const RepositoryProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchValue, setSearchValue] = useState("");
  const [searchKeyword] = useDebounce(searchValue, 500);

  const { repositories, loading, error, fetchMore } = useRepositories(
    FIRST_REPOSITORIES,
    filter.orderBy,
    filter.orderDirection,
    searchKeyword
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

  const onChangeSearch = (query) => {
    setSearchValue(query);
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        searchValue,
        loading,
        setRepositoriesFilter,
        onChangeSearch,
        fetchMore,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
