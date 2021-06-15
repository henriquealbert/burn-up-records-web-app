import { gql } from 'graphql-request'

export const CREATE_USER = gql`
  mutation ($input: createUserInput!) {
    createUser(input: $input) {
      user {
        id
        username
        email
      }
    }
  }
`
