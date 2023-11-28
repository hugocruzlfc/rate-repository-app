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
  return new Promise(async (resolve) => {
    try {
      const token = await getToken();
      const headers = {
        ...operation.getContext().headers,
        Authorization: token ? `Bearer ${token}` : "",
      };

      operation.setContext({
        headers,
      });

      const forwardResult = forward(operation);

      resolve(forwardResult);
    } catch (error) {
      console.error("Error al obtener el token:", error);
      resolve(forward(operation));
    }
  });
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware.concat(httpLink),
});
