import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Grid } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { Loading, Sidebar, Onboarding } from 'components'

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
        <>
          <Grid
            h="fit-available"
            maxH="full"
            w="full"
            bgColor="gray.50"
            templateColumns="340px 1fr"
          >
            <Sidebar />

            <Box h="full" w="full">
              <Flex direction="column" h="full" w="full">
                {children}
              </Flex>
            </Box>
          </Grid>
          <Onboarding />
        </>
      )}
    </>
  )
}
