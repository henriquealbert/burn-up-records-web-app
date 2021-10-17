import { Box, Icon } from '@chakra-ui/react'
import { BiBell } from 'react-icons/bi'

export const Notifications = ({ notifications = true }: Props) => (
  <Box
    p={2}
    bgColor="white"
    w="fit-content"
    h="fit-content"
    borderRadius="full"
    position="relative"
    cursor="pointer"
    color="black"
    _hover={{ color: 'brand.1' }}
  >
    <Icon as={BiBell} w={6} h={6} />
    {notifications && (
      <Box
        position="absolute"
        right="0"
        top="0"
        w={3}
        h={3}
        borderRadius="full"
        bgColor="brand.1"
      />
    )}
  </Box>
)

type Props = {
  notifications?: boolean
}
