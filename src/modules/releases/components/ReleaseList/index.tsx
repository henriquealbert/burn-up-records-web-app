import { Badge, Flex, Text, Heading, Box } from '@chakra-ui/react'
import NextLink from 'next/link'

import { TooltipBox } from './TooltipBox'
import { BlankSlate } from './BlankSlate'
import { ChakraNextImage } from 'components'
import {
  getStatusBgColor,
  getStatusName,
  getStatusColor
} from 'helpers/getStatus'

import { Maybe, Release, UploadFile } from 'graphql/generated'

export const ReleaseList = ({ releases }: GridListProps) => (
  <>
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
              {item?.artwork?.url ? (
                <Box maxH="164px">
                  <ChakraNextImage
                    width="164px"
                    height="164px"
                    objectFit="cover"
                    borderRadius="16px"
                    src={item?.artwork?.url}
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
  </>
)

type GridListProps = {
  releases?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Release' } & Pick<
          Release,
          'id' | 'name' | 'date' | 'type' | 'status' | 'catalog' | 'created_at'
        > & {
            artwork?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'id' | 'url' | 'formats'
              >
            >
          }
      >
    >
  >
}
