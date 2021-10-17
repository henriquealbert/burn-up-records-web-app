import NextLink from 'next/link'
import { Box } from '@chakra-ui/layout'
import { ChakraNextImage } from 'components'

export const NewRelease = () => (
  <NextLink href="/lancamentos/novo-lancamento" passHref>
    <Box as="a" cursor="pointer" width="344px" height="257px">
      <ChakraNextImage
        width="344px"
        height="257px"
        borderRadius="16px"
        src="/img/new-track.png"
      />
    </Box>
  </NextLink>
)
