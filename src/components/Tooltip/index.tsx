import { Box, BoxProps, Tooltip as ChakraTooltip } from '@chakra-ui/react'

export const Tooltip = ({ content, icon = '?', ...props }: Props) => (
  <ChakraTooltip
    label={content}
    placement="right-end"
    bgColor="white"
    boxShadow="0px 2px 2px rgba(0, 0, 0, 0.1)"
    color="brand.gray.4"
    fontSize="xs"
    borderRadius="8px"
    maxW="230px"
    p={4}
  >
    <Box
      w="18px"
      h="18px"
      bgColor="brand.gray.2"
      color="white"
      fontSize="xs"
      fontWeight="medium"
      borderRadius="full"
      cursor="default"
      textAlign="center"
      {...props}
    >
      {icon}
    </Box>
  </ChakraTooltip>
)

interface Props extends BoxProps {
  content?: string
  icon?: string
}
