import { useRouter } from 'next/router'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/client'

import { GoogleIcon, RightArrowIcon } from 'styles/icons'

export default function LoginPage() {
  const [session] = useSession()
  const { push } = useRouter()

  if (session) push('/dashboard')

  return (
    <Flex bgColor="brand.bg" minH="100vh" justify="center" align="center">
      <Flex
        bgColor="white"
        borderRadius="3xl"
        maxH="664px"
        maxW="552px"
        h="100%"
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
        <Box as="form">
          <Input mb={6} h={14} placeholder="Email" />
          <Input h={14} placeholder="Senha" />
        </Box>
        <Button
          variant="primary"
          mt={8}
          mb={12}
          rightIcon={<RightArrowIcon mt={1} />}
        >
          Começar agora
        </Button>
        <Flex justify="center">
          <Text mr={1.5}>Não tem uma conta?</Text>
          <Button variant="link">Crie sua conta</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
