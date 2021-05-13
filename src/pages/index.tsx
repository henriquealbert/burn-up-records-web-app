import { Button, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Center bg="gray.300" h="100vh" display="flex" flexDirection="column">
      <Link href="/auth/login" passHref>
        <Button mb="1rem">Login</Button>
      </Link>

      <Link href="/auth/register" passHref>
        <Button>Register</Button>
      </Link>
    </Center>
  )
}
