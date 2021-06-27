import { getSession } from 'next-auth/client'

export const myFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    const session = await getSession()
    const token = session?.jwt
    console.log('token', token)

    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? 'Bearer ' + token : ''
      },
      body: JSON.stringify({ query, variables })
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
