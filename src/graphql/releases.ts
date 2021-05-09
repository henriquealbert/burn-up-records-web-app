import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { graphQLClient } from './api'

export type ReleaseTypes = {
  id: number
  name: string
  date: string
  type: string
  status: string
  created_at: string
  description: string
  licensing_usage: boolean
  artwork: {
    id: number
    url: string
  }
}

export const useReleases = () => {
  return useQuery<ReleaseTypes[], Error>(['releases', 1], async () => {
    const query = gql`
      query AllReleases {
        releases {
          id
          name
          date
          type
          status
          created_at
          description
          licensing_usage
          artwork {
            id
            url
          }
        }
      }
    `
    const variables = null

    try {
      const { releases } = await graphQLClient.request(query, variables)
      return releases
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2))
      throw new Error(error.message)
    }
  })
}
