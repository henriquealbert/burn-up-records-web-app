import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

export const Whitebox = ({ children }: Props) => (
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
)

type Props = {
  children: ReactNode
}
