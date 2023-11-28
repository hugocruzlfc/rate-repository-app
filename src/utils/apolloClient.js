import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import Constants from "expo-constants";
import { getToken } from "./authStorage";

const httpLink = new HttpLink({ uri: Constants.expoConfig.extra.apolloUri });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(async ({ headers = {} }) => {
    const token = await getToken();
    headers = {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    };
    return {
      headers,
    };
  });

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware.concat(httpLink),
});
