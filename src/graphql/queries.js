import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryFields
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const GET_USER = gql`
  query {
    me {
      username
      id
      reviewCount
      reviews {
        totalCount
        edges {
          node {
            repository {
              ...repositoryFields
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;
