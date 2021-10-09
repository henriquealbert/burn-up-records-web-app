import axios from 'axios'
import { getSession } from 'next-auth/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const api = async (url: string, data: string | any) => {
  const session = await getSession()
  const token = session?.jwt

  return axios({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? 'Bearer ' + token : ''
    },
    data
  })
}

export const myFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    try {
      const res = (await api(
        process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string,
        JSON.stringify({ query, variables })
      )) as any
      return res.data?.data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
