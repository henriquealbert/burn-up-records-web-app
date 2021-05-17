import { Button, Center } from '@chakra-ui/react'
import { signIn } from 'next-auth/client'

export default function HomePage() {
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
