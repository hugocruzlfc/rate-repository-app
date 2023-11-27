import { Main } from "./src/components";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/utils";

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
