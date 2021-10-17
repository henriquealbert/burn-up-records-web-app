import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { Loading } from 'components'
import { Onboarding } from 'modules/Onboarding'
import { Header, Sidebar } from './components'

export const PrivateLayout = ({ children }: LayoutProps) => {
  const { push } = useRouter()
  const { session, loading } = useAuth()

  if (loading && !session) return <Loading />
  if (!session && !loading) push('/')

  return (
    <>
      <Flex direction="column" w="full" minH="100vh" px={20}>
        <Header />

        <Flex ml={24} mb={10} flexGrow={1}>
          <Sidebar />

          <Flex as="main" direction="column" ml={24} flexGrow={1}>
            {children}
          </Flex>
        </Flex>
      </Flex>

      <Onboarding />
    </>
  )
}

type LayoutProps = {
  children: ReactNode
}
