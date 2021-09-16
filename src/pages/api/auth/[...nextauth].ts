import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import Providers from 'next-auth/providers'
import NextAuth, { Account, User } from 'next-auth'
import { NextAuthOptions } from 'next-auth'

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
    })
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User, account: Account) => {
      token.id = user?.id
      token.jwt = user?.jwt

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
