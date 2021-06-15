import { signIn } from 'next-auth/client'
import { Flex, Heading, Button, Text } from '@chakra-ui/react'
import { GoogleIcon } from 'styles/icons'

import { LoginForm } from './LoginForm'

export const LoginModule = () => (
  <Flex
    bgColor="brand.bg"
    minH="100vh"
    h="full"
    w="full"
    justify="center"
    align="center"
  >
    <Flex
      bgColor="white"
      borderRadius="3xl"
      maxH="664px"
      maxW="552px"
      h="full"
      w="full"
      py={12}
      px={24}
      direction="column"
    >
      <Heading mb={14}>Bora lançar track 🤘</Heading>
      <Button
        variant="google"
        leftIcon={<GoogleIcon mr={14} w={6} h={6} />}
        mb={10}
        onClick={() =>
          signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
        }
      >
        Entrar com o Google
      </Button>
      <Text textAlign="center" fontSize="lg" mb={8}>
        ou
      </Text>

      <LoginForm />

      <Flex justify="center">
        <Text mr={1.5}>Não tem uma conta?</Text>
        <Button variant="link">Crie sua conta</Button>
      </Flex>
    </Flex>
  </Flex>
)
