import { Flex, Icon } from '@chakra-ui/react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiShutDownLine } from 'react-icons/ri'

export const Header = () => (
  <Flex
    h="60px"
    bgColor="white"
    borderBottom="2px solid"
    borderColor="gray.100"
    justifyContent="flex-end"
    align="center"
    px="24px"
  >
    <Flex align="center">
      <Icon
        as={IoMdNotificationsOutline}
        w="24px"
        h="24px"
        title="Notificações"
      />
      <Icon
        as={RiShutDownLine}
        w="22px"
        h="22px"
        ml="16px"
        title="Logout"
        _hover={{ color: 'red.500' }}
        cursor="pointer"
      />
    </Flex>
  </Flex>
)
