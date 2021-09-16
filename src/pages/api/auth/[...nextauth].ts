import { NextAuthOptions } from 'next-auth'
import NextAuth, { User } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'

type AuthorizeProps = {
  user: User
  jwt: string
}

const options: NextAuthOptions = {
  pages: {
    signIn: '/cadastrar'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign-in',
      credentials: {},
      async authorize({ user, jwt }: AuthorizeProps) {
        if (user && jwt) {
          return { ...user, jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.jwt = user.jwt
      session.id = user.id
      return Promise.resolve(session)
    },
    jwt: async ({ token, user }) => {
      token.id = user?.id
      token.jwt = user?.jwt
      return Promise.resolve(token)
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
