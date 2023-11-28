import { Main } from "./src/components";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/utils";
import { AuthStorageProvider } from "./src/context";

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageProvider>
          <Main />
        </AuthStorageProvider>
      </ApolloProvider>
    </NativeRouter>
  );
}
