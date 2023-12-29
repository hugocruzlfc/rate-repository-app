import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
