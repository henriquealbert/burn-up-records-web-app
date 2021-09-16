import NextLink from 'next/link'
import { Flex, Button, Text } from '@chakra-ui/react'

import { LoginForm } from './LoginForm'
import { AuthLayout } from 'components/AuthLayout'

export const LoginModule = () => (
  <AuthLayout
    title="Bora lançar track 🤘"
    renderForm={<LoginForm />}
    renderFooter={
      <Flex justify="center">
        <Text mr={1.5}>Não tem uma conta?</Text>
        <NextLink passHref href="/cadastrar">
          <Button variant="link" as="a">
            Crie sua conta
          </Button>
        </NextLink>
      </Flex>
    }
  />
)
