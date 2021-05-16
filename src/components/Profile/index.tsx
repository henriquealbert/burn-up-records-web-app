import { Flex, Avatar, Text, Box } from '@chakra-ui/react'

type AvatarProps = {
  info?: boolean
  m?: string
  p?: string
}

export const Profile = ({ info, m, p }: AvatarProps) => (
  <Flex m={m} p={p} align="center">
    <Avatar w="46px" h="46px" />
    {info && (
      <Box pl="16px">
        <Text fontSize="14px" lineHeight="21px" color="black" fontWeight="500">
          Sierra Ferguson
        </Text>
        <Text
          fontSize="12px"
          fontWeight="500"
          lineHeight="16px"
          color="gray.500"
        >
          s.ferguson@gmail.com
        </Text>
      </Box>
    )}
  </Flex>
)
