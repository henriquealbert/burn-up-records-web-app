import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => (
  <Flex h="64px" align="center" pl="340px" justify="center">
    <Text color="brand.gray.2" fontSize="xs" textAlign="center">
      Copyright - All rights reserved to Burn Up Records{' '}
      {new Date().getFullYear()}
    </Text>
  </Flex>
)
