import React from "react";
import { Main } from "./src/components";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/utils";
import { AuthStorageProvider, RepositoryProvider } from "./src/context";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <RepositoryProvider>
          <AuthStorageProvider>
            <SafeAreaProvider>
              <Main />
            </SafeAreaProvider>
          </AuthStorageProvider>
        </RepositoryProvider>
      </ApolloProvider>
    </NativeRouter>
  );
}
