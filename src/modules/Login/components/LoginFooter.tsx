import NextLink from 'next/link'
import { Box, Text } from '@chakra-ui/react'

export const LoginFooter = () => (
  <Box mt="74px" textAlign="center">
    <Text color="brand.10" fontSize="sm" lineHeight="18px" opacity="0.8">
      Não tem uma conta?{' '}
      <NextLink href="/cadastrar" passHref>
        <Text as="a" textDecor="underline" _hover={{ color: 'brand.3' }}>
          Crie sua conta
        </Text>
      </NextLink>
    </Text>
    <Text fontSize="sm" lineHeight="18px">
      <NextLink href="/esqueci-minha-senha" passHref>
        <Text
          as="a"
          textDecor="underline"
          color="brand.10"
          fontSize="sm"
          lineHeight="18px"
          opacity="0.8"
          _hover={{ color: 'brand.3' }}
        >
          Esqueci minha senha
        </Text>
      </NextLink>
    </Text>
  </Box>
)
