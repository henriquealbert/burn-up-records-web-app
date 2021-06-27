import { Flex, Avatar, Text, Box, FlexProps } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { imgUrl } from 'helpers'

export const Profile = (props: FlexProps) => {
  const { me } = useAuth()
  return (
    <Flex align="center" direction="column" {...props}>
      <Avatar w="148px" h="148px" src={imgUrl(me?.user?.avatar?.url) || ''} />
      <Box mt={6} textAlign="center" lineHeight="1">
        <Text fontSize="4xl" color="black" fontWeight="medium">
          {me?.user?.artist_name || 'Sem nome'}
        </Text>
        <Text mt={2} color="brand.gray.4">
          Lançamentos: {me?.user?.releases?.length}
        </Text>
      </Box>
    </Flex>
  )
}
