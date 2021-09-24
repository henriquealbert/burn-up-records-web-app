import { useSession } from 'next-auth/client'
import { createContext, ReactNode, useContext } from 'react'
import { GetMeQuery, useGetMeQuery } from 'graphql/generated'
import { Session } from 'next-auth'

interface ContextTypes {
  me?: GetMeQuery['me']
  isMeLoading?: boolean
  session?: Session | null
  loading?: boolean
}

const AuthContext = createContext({} as ContextTypes)

interface AuthProviderProps {
  children?: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, loading] = useSession()

  const { data, isLoading } = useGetMeQuery(null, {
    enabled: !!session?.jwt,
    staleTime: 60 * 60 * 1000, // 1 hour
    keepPreviousData: true
  })

  return (
    <AuthContext.Provider
      value={{
        me: data?.me,
        isMeLoading: isLoading,
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
