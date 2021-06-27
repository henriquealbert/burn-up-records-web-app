import { useSession } from 'next-auth/client'
import { Flex, Avatar, Text, Box, FlexProps } from '@chakra-ui/react'

interface AvatarProps extends FlexProps {
  releasesQuantity?: number
}

export const Profile = ({ releasesQuantity = 0, ...rest }: AvatarProps) => {
  const [session] = useSession()

  return (
    <Flex align="center" direction="column" {...rest}>
      <Avatar w="148px" h="148px" src={session?.user?.image || ''} />
      <Box mt={6} textAlign="center" lineHeight="1">
        <Text fontSize="4xl" color="black" fontWeight="medium">
          {session?.user?.name}
        </Text>
        <Text mt={2} color="brand.gray.4">
          Lançamentos: {releasesQuantity}
        </Text>
      </Box>
    </Flex>
  )
}
