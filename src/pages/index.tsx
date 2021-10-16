import { Center, Button, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function HomePage() {
  return (
    <Center h="100vh" display="flex" flexDirection="column">
      <h1>Burn Up Records</h1>
      <Flex>
        <NextLink passHref href="/login">
          <Button variant="outline" as="a" mr={4}>
            Login
          </Button>
        </NextLink>
        <NextLink passHref href="/cadastrar">
          <Button variant="outline" as="a">
            Cadastrar
          </Button>
        </NextLink>
      </Flex>
    </Center>
  )
}
