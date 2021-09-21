import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import NextAuth, { User } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

type AuthorizeProps = {
  user: any
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
        if (user) {
          return { ...user, jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User) => {
      if (user) {
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
