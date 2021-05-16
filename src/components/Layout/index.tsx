import { Box, Flex, Grid } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Grid h="100vh" w="100vw" bgColor="gray.50" templateColumns="256px 1fr">
    <Sidebar />

    <Box h="100%">
      <Header />

      <Flex direction="column" h="calc(100% - 108px)" m="24px">
        {children}
      </Flex>
    </Box>
  </Grid>
)
