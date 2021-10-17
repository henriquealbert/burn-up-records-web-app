import NextLink from 'next/link'
import { Badge, Flex, Text, Heading, Box } from '@chakra-ui/react'

import { ChakraNextImage } from 'components'
import {
  getStatusBgColor,
  getStatusName,
  getStatusColor
} from 'helpers/getStatus'
import { GetReleasesByUserIdQuery } from 'graphql/generated'
import { BlankSlate, NewRelease, TooltipBox } from './components'

export const ReleaseList = ({ releases }: GridListProps) => (
  <Flex flexGrow={1}>
    <NewRelease />

    {releases?.length === 0 ? (
      <BlankSlate />
    ) : (
      <Flex flexWrap="wrap">
        {releases?.map((item) => (
          <Box
            key={item?.id}
            h="370px"
            w="196px"
            bgColor="brand.bg"
            borderRadius="16px"
            p={4}
            mr={8}
            mb={8}
          >
            <NextLink href={`/lancamentos/${item?.id}`} passHref>
              {item?.artworkUrl ? (
                <Box maxH="164px">
                  <ChakraNextImage
                    width="164px"
                    height="164px"
                    objectFit="cover"
                    borderRadius="16px"
                    src={item?.artworkUrl}
                    cursor="pointer"
                  />
                </Box>
              ) : (
                <Box
                  cursor="pointer"
                  width="164px"
                  height="164px"
                  borderRadius="16px"
                  bgColor="brand.gray.1"
                />
              )}
            </NextLink>

            <Flex direction="column" mt={2}>
              <Text
                mb={4}
                color="brand.gray.3"
                fontSize="xs"
                letterSpacing="wide"
              >
                {item?.catalog}
              </Text>
              <Heading
                as="h3"
                mb={1}
                fontWeight="bold"
                color="black"
                fontSize="md"
              >
                {item?.name}
              </Heading>
              <Text fontWeight="medium" fontSize="sm" color="brand.gray.4">
                Artist name
              </Text>

              <TooltipBox data={item} />

              <Badge
                mt="auto"
                h="32px"
                borderRadius="8px"
                color={getStatusColor(item?.status)}
                bgColor={getStatusBgColor(item?.status)}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="normal"
                fontSize="sm"
                textTransform="none"
              >
                {getStatusName(item?.status)}
              </Badge>
            </Flex>
          </Box>
        ))}
      </Flex>
    )}
  </Flex>
)

type GridListProps = {
  releases?: GetReleasesByUserIdQuery['releasesByUserId']
}
