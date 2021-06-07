import { Flex, Avatar, Text, Box } from '@chakra-ui/react'
import { useSession } from 'next-auth/client'

type AvatarProps = {
  info?: boolean
  m?: string
  p?: string
}

export const Profile = ({ info, m, p }: AvatarProps) => {
  const [session] = useSession()
  return (
    <Flex m={m} p={p} align="center">
      <Avatar w="46px" h="46px" src={session?.user?.image || ''} />
      {info && (
        <Box pl="16px" maxW="150px">
          <Text
            fontSize="14px"
            lineHeight="21px"
            color="black"
            fontWeight="500"
          >
            {session?.user?.name}
          </Text>
          <Text
            fontSize="12px"
            fontWeight="500"
            lineHeight="16px"
            color="gray.500"
            isTruncated
          >
            {session?.user?.email}
          </Text>
        </Box>
      )}
    </Flex>
  )
}
