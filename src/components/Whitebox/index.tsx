import { ReactNode } from 'react'
import { Box } from '@chakra-ui/layout'

type WhiteboxProps = {
  children: ReactNode
}

export const Whitebox = ({ children }: WhiteboxProps) => (
  <Box
    p="24px"
    mt="24px"
    boxShadow="0px 6px 18px rgba(0, 0, 0, 0.06)"
    borderRadius="4px"
    backgroundColor="white"
    flexGrow={1}
  >
    {children}
  </Box>
)
