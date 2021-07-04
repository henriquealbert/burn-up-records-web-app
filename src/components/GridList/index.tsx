import { Badge, Box, Flex, SimpleGrid, Img, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { getStatusColor, getStatusName } from 'helpers'
import { AllReleasesQuery } from 'graphql/generated'

type Releases = Pick<AllReleasesQuery, 'releases'>

type GridListProps = {
  data?: Releases
}

export const GridList = ({ data }: GridListProps) => (
  <SimpleGrid minChildWidth="215px" spacing="24px">
    {data?.releases?.map((item) => (
      <Link key={item?.id} href={`/lancamentos/${item?.id}`} passHref>
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
            w="full"
            h="100px"
            objectFit="cover"
            objectPosition="center"
            borderBottom="1px solid"
            borderColor="gray.100"
            src={item?.artwork?.url || '/img/image-placeholder.png'}
          />
          <Flex p="12px" direction="column">
            <Text fontSize="10px" color="gray.400">
              {item?.catalog}
            </Text>

            <Text fontWeight="bold" color="black">
              {item?.name}
            </Text>
            <Text fontSize="13px" color="gray.500" as="i" lineHeight="1">
              Artist name
            </Text>
            <Text
              color="gray.400"
              fontSize="13px"
              fontWeight="medium"
              mt="12px"
            >
              {item?.date}
            </Text>
            <Badge
              variant="subtle"
              colorScheme={getStatusColor(String(item?.status))}
              borderRadius="4px"
              alignSelf="flex-end"
              mt="12px"
            >
              {getStatusName(String(item?.status))}
            </Badge>
          </Flex>
        </Box>
      </Link>
    ))}
  </SimpleGrid>
)
