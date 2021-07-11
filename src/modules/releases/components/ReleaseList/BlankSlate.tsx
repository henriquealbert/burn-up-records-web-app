import { Center, Text, Heading } from '@chakra-ui/react'

export const BlankSlate = () => (
  <Center h="full" flexDirection="column">
    <Heading
      as="h2"
      fontWeight="medium"
      color="brand.gray.3"
      fontSize="2xl"
      lineHeight={9}
    >
      Ops, nada para ver aqui ainda.
    </Heading>
    <Text color="brand.gray.3" fontSize="lg">
      Lance suas tracks e acompanhe aqui o status de lançamento delas.
    </Text>
  </Center>
)
