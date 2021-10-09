import { Box, Text, Flex, Img } from '@chakra-ui/react'

export const LoginBanner = () => (
  <Box position="absolute" bottom="56px" left="80px">
    <Text
      fontSize="24px"
      lineHeight="36px"
      color="white"
      maxW="286px"
      mb={6}
      as="h1"
    >
      O mundo está esperando para ouvir sua track.
    </Text>
    <Flex align="center">
      <Img src="/img/banner-login-stores.png" mr={6} h="32px" w="225px" />
      <Text color="white" maxW="69px" fontSize="sm" lineHeight="18px">
        + e mais 200 lojas
      </Text>
    </Flex>
  </Box>
)
