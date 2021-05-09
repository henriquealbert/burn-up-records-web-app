import { GraphQLClient } from 'graphql-request'

const API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://localhost:1337/graphql'

// TODO
// const token = ''

export const graphQLClient = new GraphQLClient(API_URL, {
  // headers: {
  //   authorization: `Bearer ${token}`
  // }
})
