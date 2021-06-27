import { Center, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function HomePage() {
  return (
    <Center bg="gray.300" h="100vh" display="flex" flexDirection="column">
      <h1>Burn Up Records</h1>
      <NextLink passHref href="/login">
        <Button as="a"> Login</Button>
      </NextLink>
    </Center>
  )
}
