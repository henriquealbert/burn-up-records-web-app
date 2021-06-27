import { useSession } from 'next-auth/client'
import { createContext, ReactNode, useContext } from 'react'
import { GetMeQuery, useGetMeQuery } from 'graphql/generated'
import { Session } from 'next-auth'

interface ContextTypes {
  me?: GetMeQuery | undefined
  isMeLoading?: boolean
  session?: Session | null
  loading?: boolean
}

const AuthContext = createContext<ContextTypes>({
  me: {},
  isMeLoading: true,
  session: {},
  loading: true
})

interface Props {
  children?: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const [session, loading] = useSession()
  const { data: me, isLoading: isMeLoading } = useGetMeQuery(
    { id: session?.id as string },
    { enabled: !!session?.id }
  )
  return (
    <AuthContext.Provider
      value={{
        me,
        isMeLoading,
        session,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { useAuth, AuthProvider }
