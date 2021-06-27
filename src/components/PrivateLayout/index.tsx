import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Grid } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { Loading, Sidebar } from 'components'

type LayoutProps = {
  children: ReactNode
}

export const PrivateLayout = ({ children }: LayoutProps) => {
  const { push } = useRouter()
  const { session, loading } = useAuth()

  if (loading) return <Loading />
  if (!session) push('/')

  return (
    <>
      {session && (
        <Grid h="100vh" w="100vw" bgColor="gray.50" templateColumns="340px 1fr">
          <Sidebar />

          <Box h="100%">
            <Flex direction="column">{children}</Flex>
          </Box>
        </Grid>
      )}
    </>
  )
}
