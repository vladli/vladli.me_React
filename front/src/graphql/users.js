import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($uid: ID!) {
    getUser(uid: $uid) {
      uid
      email
    }
  }
`;
