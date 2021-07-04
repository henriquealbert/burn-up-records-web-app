import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { Loading, Sidebar, Onboarding, Footer, Whitebox } from 'components'

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

        <Whitebox pageTitle={pageTitle}>{children}</Whitebox>
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
