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
