import { Flex, Text } from '@chakra-ui/react'

export const BlankSlate = () => (
  <Flex direction="column" justify="center" ml={14} maxH="257px">
    <Text fontSize="18px" color="brand.7" opacity="0.8" mb={2}>
      Ops, nada para ver aqui ainda.
    </Text>
    <Text color="brand.7" opacity="0.8" maxW="265px">
      Lance suas tracks e acompanhe aqui o status de lançamento delas.
    </Text>
  </Flex>
)
