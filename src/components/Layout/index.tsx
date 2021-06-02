import { Box, Flex, Grid } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { Loading } from 'components/Loading'
import { Sidebar } from 'components/Sidebar'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [session, loading] = useSession()
  const { push } = useRouter()

  if (loading) return <Loading />
  if (!session) push('/')

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
