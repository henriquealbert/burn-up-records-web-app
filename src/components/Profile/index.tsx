import { Flex, Text, Box, FlexProps } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { ChakraNextImage } from 'components'

export const Profile = (props: FlexProps) => {
  const { me } = useAuth()
  const avatarUrl = me?.avatarUrl || '/img/avatar-placeholder.png'
  return (
    <Flex align="center" direction="column" {...props}>
      <ChakraNextImage
        width="148px"
        height="148px"
        borderRadius="full"
        overflow="hidden"
        src={avatarUrl}
        objectFit="cover"
        loading="eager"
      />
      <Box mt={6} textAlign="center" lineHeight="1">
        <Text fontSize="4xl" color="black" fontWeight="medium">
          {me?.name || 'Sem nome'}
        </Text>
      </Box>
    </Flex>
  )
}
