import { Center, Spinner } from '@chakra-ui/react'

export const Loading = () => (
  <Center bg="gray.100" h="100vh" display="flex" flexDirection="column">
    <Spinner size="xl" />
  </Center>
)
