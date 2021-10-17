import { Flex, Heading } from '@chakra-ui/layout'

import { useAuth } from 'auth'
import { ChakraNextImage, Notifications } from 'components'

export const Header = () => {
  const { me } = useAuth()
  const avatarUrl = me?.avatarUrl || '/img/avatar-placeholder.png'

  return (
    <Flex my={10} alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <ChakraNextImage
          width="112px"
          height="112px"
          borderRadius="full"
          overflow="hidden"
          src={avatarUrl}
          objectFit="cover"
          loading="eager"
        />
        <Heading ml={8} as="h1" fontSize="4xl" fontWeight="normal">
          {me?.name || 'Usuário'}
        </Heading>
      </Flex>

      <Notifications />
    </Flex>
  )
}
