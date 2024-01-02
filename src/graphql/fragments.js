import { gql } from "@apollo/client";

export const REPOSITORY_FRAGMENT = gql`
  fragment repositoryFields on Repository {
    id
    fullName
    description
    language
    forksCount
    ratingAverage
    reviewCount
    url
    stargazersCount
    ownerAvatarUrl
  }
`;

export const PAGE_INFO_FRAGMENT = gql`
  fragment pageInfoFields on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
`;
