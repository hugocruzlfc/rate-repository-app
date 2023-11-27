import { gql } from "@apollo/client";

export const SET_AUTH = gql`
  mutation ($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        username
        id
      }
    }
  }
`;
