import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import NextAuth, { Account, User } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

type AuthorizeProps = {
  user: User
  jwt: string
}

const options = {
  pages: {
    signIn: '/cadastrar'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ user, jwt }: AuthorizeProps) {
        return { ...user, jwt }
      }
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    })
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User, account: Account) => {
      if (account?.provider) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account?.provider}/callback?access_token=${account?.accessToken}`
        )
        const data = await response.json()
        token.id = data?.user?.id
        token.jwt = data?.jwt
      } else if (user) {
        token.id = user?.id
        token.jwt = user?.jwt
      }

      return Promise.resolve(token)
    },
    async redirect(url: string, baseUrl: string) {
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
