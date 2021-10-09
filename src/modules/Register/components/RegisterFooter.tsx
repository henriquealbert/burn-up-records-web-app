import NextLink from 'next/link'
import { Box, Text } from '@chakra-ui/react'

export const RegisterFooter = () => (
  <Box mt="74px">
    <Text
      color="brand.10"
      fontSize="sm"
      lineHeight="18px"
      opacity="0.8"
      textAlign="center"
    >
      Ao continuar você concorda com os{' '}
      <NextLink href="/termos-e-privacidade" passHref>
        <Text as="a" textDecor="underline" _hover={{ color: 'brand.3' }}>
          Termos de uso.
        </Text>
      </NextLink>
    </Text>
    <Text
      color="brand.10"
      fontSize="sm"
      lineHeight="18px"
      opacity="0.8"
      textAlign="center"
    >
      Já tem uma conta?{' '}
      <NextLink href="/login" passHref>
        <Text as="a" textDecor="underline" _hover={{ color: 'brand.3' }}>
          Faça login
        </Text>
      </NextLink>
    </Text>
  </Box>
)
