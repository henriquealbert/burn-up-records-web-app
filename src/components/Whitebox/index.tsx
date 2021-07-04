import { ReactNode } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

export const Whitebox = ({ children, pageTitle }: Props) => (
  <Flex direction="column" mx={8} mt={10} as="main">
    <Heading as="h1" fontSize="4xl" fontWeight="medium" mb={8}>
      {pageTitle}
    </Heading>
    <Flex
      bgColor="white"
      overflowY="auto"
      maxH="fill-available"
      borderRadius="16px 16px 0 0"
      p={10}
      direction="column"
      w="fill-availabe"
      h="full"
      flex={1}
    >
      {children}
    </Flex>
  </Flex>
)

type Props = {
  children: ReactNode
  pageTitle: string
}
