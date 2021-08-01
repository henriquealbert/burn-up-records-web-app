import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Grid, Flex, Heading, Box } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { Onboarding } from 'modules/Onboarding'
import { Loading, Sidebar, Footer, Whitebox, Notifications } from 'components'

export const PrivateLayout = ({
  children,
  pageTitle,
  header = true,
  whitebox = true
}: LayoutProps) => {
  const { push } = useRouter()
  const { session, loading } = useAuth()

  if (loading && !session) return <Loading />
  if (!session && !loading) push('/')

  return (
    <>
      <Grid
        h="fit-available"
        maxH="full"
        w="full"
        bgColor="brand.bg"
        templateColumns="340px 1fr"
      >
        <Sidebar />

        <Flex direction="column" m={8} mb={0} as="main">
          {header && (
            <Flex justifyContent="space-between">
              <Heading as="h1" fontSize="4xl" fontWeight="medium" mb={8} mt={4}>
                {pageTitle}
              </Heading>
              <Notifications />
            </Flex>
          )}

          {whitebox ? (
            <Whitebox>{children}</Whitebox>
          ) : (
            <Box h="calc(100% - 64px)">{children}</Box>
          )}
        </Flex>
      </Grid>

      <Footer />

      <Onboarding />
    </>
  )
}

type LayoutProps = {
  children: ReactNode
  pageTitle?: string
  header?: boolean
  whitebox?: boolean
}
