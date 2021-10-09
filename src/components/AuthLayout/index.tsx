import { ReactNode } from 'react'
import { Flex, SimpleGrid, Button, Text, Divider, Img } from '@chakra-ui/react'
import { GoogleIcon } from 'styles/icons'
import { ChakraNextImage } from 'components'
import { Form, FormValuesTypes } from './Form'

type Props = {
  renderFooter: ReactNode
  bannerSrc: string
  renderBannerContent: ReactNode
  submitButtonText: string
  onSubmit: (values: FormValuesTypes) => Promise<void>
}

export const AuthLayout = ({
  renderFooter,
  bannerSrc,
  renderBannerContent,
  onSubmit,
  submitButtonText
}: Props) => {
  return (
    <SimpleGrid columns={2} minH="100vh">
      <Flex maxH="100vh" position="relative">
        <Img src={bannerSrc} objectFit="cover" objectPosition="top" />
        {renderBannerContent}
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        w="full"
        maxW="360px"
        mx="auto"
      >
        <ChakraNextImage
          src="/img/logo-with-brand.svg"
          width="118px"
          height="66px"
        />

        <Button variant="google" onClick={() => alert('Em breve...')} mt={20}>
          <GoogleIcon mr={6} h="18px" w="18px" />
          Entrar com o Google
        </Button>
        <Flex my={12} alignItems="center" justify="center">
          <Divider bg="brand.6" opacity="0.5" w="124px" mr={4} mt={1} />
          <Text
            textAlign="center"
            opacity="0.5"
            color="black"
            fontSize="sm"
            lineHeight="18px"
          >
            ou
          </Text>
          <Divider bg="brand.6" w="124px" opacity="0.5" ml={4} mt={1} />
        </Flex>

        <Form onSubmit={onSubmit} submitButtonText={submitButtonText} />

        {renderFooter}
      </Flex>
    </SimpleGrid>
  )
}
