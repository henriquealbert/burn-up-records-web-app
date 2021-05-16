import { Badge, Box, Flex, SimpleGrid, Img, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { imgUrl } from 'helpers/imgUrl'
import { getStatusColor, getStatusName } from 'helpers/getStatus'

import { ReleaseTypes } from 'graphql/releases'

type GridListProps = {
  data: ReleaseTypes[]
}

export const GridList = ({ data }: GridListProps) => (
  <SimpleGrid minChildWidth="215px" spacing="24px">
    {data?.map((item) => (
      <Link key={item.id} href={`/releases/${item.id}`} passHref>
        <Box
          cursor="pointer"
          borderRadius="4px"
          backgroundColor="white"
          w="215px"
          border="1px solid"
          borderColor="gray.100"
          _hover={{ boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)' }}
          transition="all 200ms ease-in-out"
        >
          <Img
            borderRadius="4px 4px 0 0"
            w="100%"
            h="100px"
            objectFit="cover"
            objectPosition="center"
            borderBottom="1px solid"
            borderColor="gray.100"
            src={
              item.artwork
                ? imgUrl(item.artwork.url)
                : '/img/image-placeholder.png'
            }
          />
          <Flex p="12px" direction="column">
            <Text fontSize="10px" color="gray.400">
              {item.catalog}
            </Text>

            <Text fontWeight="bold" color="black">
              {item.name}
            </Text>
            <Text fontSize="13px" color="gray.500" as="i" lineHeight="1">
              {item.artist.name}
            </Text>
            <Text
              color="gray.400"
              fontSize="13px"
              fontWeight="medium"
              mt="12px"
            >
              {item.date}
            </Text>
            <Badge
              variant="subtle"
              colorScheme={getStatusColor(item.status)}
              borderRadius="4px"
              alignSelf="flex-end"
              mt="12px"
            >
              {getStatusName(item.status)}
            </Badge>
          </Flex>
        </Box>
      </Link>
    ))}
  </SimpleGrid>
)
