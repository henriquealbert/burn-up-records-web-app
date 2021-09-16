import { ReactNode } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

type Props = {
  renderForm: ReactNode
  renderFooter: ReactNode
  title: string
}

export const AuthLayout = ({ renderForm, title, renderFooter }: Props) => {
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

        <Text textAlign="center" fontSize="lg" mb={8}>
          ou
        </Text>

        {renderForm}

        {renderFooter}
      </Flex>
    </Flex>
  )
}
