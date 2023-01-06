import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($uid: ID!) {
    getUser(uid: $uid) {
      uid
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      uid
      email
      displayName
      photoURL
      disabled
      metadata {
        creationTime
      }
    }
  }
`;
