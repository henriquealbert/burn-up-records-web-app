import { Flex, Heading } from '@chakra-ui/layout'

import { useAuth } from 'auth'
import { ChakraNextImage, Notifications } from 'components'
import { UserIcon } from 'styles/icons'

export const Header = () => {
  const { me } = useAuth()

  return (
    <Flex my={10} alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        {me?.avatarUrl ? (
          <ChakraNextImage
            width="112px"
            height="112px"
            borderRadius="full"
            overflow="hidden"
            src={me?.avatarUrl}
            objectFit="cover"
            loading="eager"
          />
        ) : (
          <Flex
            border="1px"
            borderRadius="full"
            width="112px"
            height="112px"
            justify="center"
            align="center"
            borderColor="brand.5"
          >
            <UserIcon width="31px" height="33px" color="brand.6" />
          </Flex>
        )}
        <Heading ml={8} as="h1" fontSize="4xl" fontWeight="normal">
          {me?.name || 'Usuário'}
        </Heading>
      </Flex>

      <Notifications />
    </Flex>
  )
}
