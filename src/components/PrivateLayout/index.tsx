import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Grid, Flex, Heading } from '@chakra-ui/react'

import { useAuth } from 'auth'
import {
  Loading,
  Sidebar,
  Onboarding,
  Footer,
  Whitebox,
  Notifications
} from 'components'

export const PrivateLayout = ({ children, pageTitle }: LayoutProps) => {
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
          <Flex justifyContent="space-between">
            <Heading as="h1" fontSize="4xl" fontWeight="medium" mb={8} mt={4}>
              {pageTitle}
            </Heading>
            <Notifications />
          </Flex>

          <Whitebox>{children}</Whitebox>
        </Flex>
      </Grid>

      <Footer />

      <Onboarding />
    </>
  )
}

type LayoutProps = {
  children: ReactNode
  pageTitle: string
}
