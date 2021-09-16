import NextLink from 'next/link'
import { Flex, Text, Button } from '@chakra-ui/react'

import { RegisterForm } from './RegisterForm'
import { AuthLayout } from 'components/AuthLayout'

export const RegisterModule = () => {
  return (
    <AuthLayout
      title="Bora começar 🔥"
      renderForm={<RegisterForm />}
      renderFooter={
        <Flex justify="center">
          <Text mr={0.5}>Já tem uma conta? Faça</Text>
          <NextLink passHref href="/login">
            <Button variant="link">login</Button>
          </NextLink>
        </Flex>
      }
    />
  )
}
