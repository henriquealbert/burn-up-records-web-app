import { ReactNode } from 'react'
import { signIn } from 'next-auth/client'
import { GoogleIcon } from 'styles/icons'
import { Flex, Heading, Button, Text } from '@chakra-ui/react'

type Props = {
  renderForm: ReactNode
  renderFooter: ReactNode
  title: string
  googleBtnText: string
}

export const AuthLayout = ({
  renderForm,
  title,
  renderFooter,
  googleBtnText
}: Props) => {
  return (
    <Flex
      bgColor="brand.bg"
      minH="100vh"
      h="full"
      w="full"
      justify="center"
      align="center"
    >
      <Flex
        bgColor="white"
        borderRadius="3xl"
        maxW="552px"
        h="full"
        w="full"
        py={12}
        px={24}
        direction="column"
      >
        <Heading mb={14} textAlign="center">
          {title}
        </Heading>
        <Button
          variant="google"
          leftIcon={<GoogleIcon mr={10} w={6} h={6} />}
          mb={10}
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          {googleBtnText}
        </Button>
        <Text textAlign="center" fontSize="lg" mb={8}>
          ou
        </Text>

        {renderForm}

        {renderFooter}
      </Flex>
    </Flex>
  )
}
