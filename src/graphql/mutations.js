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

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      rating
      text
      createdAt
      repositoryId
    }
  }
`;
