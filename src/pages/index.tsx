import { useRouter } from 'next/router'
import { Button, Center } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/client'

import { Loading } from 'components/Loading'

export default function HomePage() {
  const [session, loading] = useSession()
  const { push } = useRouter()

  if (session) push('/dashboard')
  if (loading) return <Loading />

  return (
    <Center bg="gray.300" h="100vh" display="flex" flexDirection="column">
      <Button
        onClick={() =>
          signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
        }
      >
        Sign in with Google
      </Button>
    </Center>
  )
}
