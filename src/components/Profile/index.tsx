import { useSession } from 'next-auth/client'
import { Flex, Avatar, Text, Box, FlexProps } from '@chakra-ui/react'

import { imgUrl } from 'helpers'
import { useGetMeQuery } from 'graphql/generated'

export const Profile = (props: FlexProps) => {
  const [session] = useSession()
  const { data } = useGetMeQuery({ id: session?.id as string })

  return (
    <Flex align="center" direction="column" {...props}>
      <Avatar w="148px" h="148px" src={imgUrl(data?.user?.avatar?.url) || ''} />
      <Box mt={6} textAlign="center" lineHeight="1">
        <Text fontSize="4xl" color="black" fontWeight="medium">
          {data?.user?.artist_name}
        </Text>
        <Text mt={2} color="brand.gray.4">
          Lançamentos: {data?.user?.releases?.length}
        </Text>
      </Box>
    </Flex>
  )
}
