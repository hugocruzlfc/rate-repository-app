import React from "react";
import { render } from "@testing-library/react-native";
import { repositories } from "../../mocks";
import { Text, FlatList } from "react-native";
//import RepositoryListContainer from "../../components/RepositoryListContainer";

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <Item fullName={item.fullName} />}
      keyExtractor={(item) => item.id}
      // other props
    />
  );
};

const Item = ({ fullName }) => {
  return <Text testID="fullName">{fullName}</Text>;
};

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const { getByText, getByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      // debug();
      //  expect(getByText(/jaredpalmer\/formik/i)).toBeTruthy();

      // Verifica que los campos del primer repositorio se rendericen correctamente
      expect(getByText("jaredpalmer/formik")).toBeTruthy();
      //   expect(getByText("Build forms in React, without the tears")).toBeTruthy();
      //   expect(getByText("TypeScript")).toBeTruthy();
      //   expect(getByTestId("forksCount")).toHaveTextContent("1619");
      //   expect(getByTestId("stargazersCount")).toHaveTextContent("21856");
      // Añade más expectativas según sea necesario para los otros campos

      // Verifica que los campos del segundo repositorio también se rendericen correctamente
      expect(getByText("async-library/react-async")).toBeTruthy();
      //   expect(
      //     getByText("Flexible promise-based React data loader")
      //   ).toBeTruthy();
      //   expect(getByText("JavaScript")).toBeTruthy();
      //   expect(getByTestId("forksCount")).toHaveTextContent("69");
      //   expect(getByTestId("stargazersCount")).toHaveTextContent("1760");
    });
  });
});
