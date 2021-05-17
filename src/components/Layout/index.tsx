import { Box, Center, Flex, Grid, Spinner } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) {
    return (
      <Center bg="gray.100" h="100vh" display="flex" flexDirection="column">
        <Spinner size="xl" />
      </Center>
    )
  }

  if (!session) {
    router.push('/')
  }

  return (
    <>
      {session && (
        <Grid h="100vh" w="100vw" bgColor="gray.50" templateColumns="256px 1fr">
          <Sidebar />

          <Box h="100%">
            <Header />

            <Flex direction="column" h="calc(100% - 108px)" m="24px">
              {children}
            </Flex>
          </Box>
        </Grid>
      )}
    </>
  )
}
