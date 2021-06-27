import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Flex, Stack } from '@chakra-ui/react'

import { LogOut } from './LogOut'
import { sidebarLinks } from './sidebarLinks'

import { Profile } from 'components'

import logo from '../../../public/logo.svg'

export const Sidebar = () => {
  const router = useRouter()
  return (
    <Flex
      direction="column"
      w="100%"
      h="100vh"
      bgColor="white"
      zIndex="sticky"
      borderRadius="lg"
    >
      <Profile mt={20} />
      <Flex justify="center" mt={6} mb={10}>
        <Button variant="primary">Lançar Track</Button>
      </Flex>
      <Stack spacing={5} ml={16}>
        {sidebarLinks.map((link) => (
          <NextLink key={link.name} href={link.path} passHref>
            <Button
              variant="menu"
              leftIcon={link.icon}
              color={
                router.pathname === link.path ? 'brand.primary' : 'brand.gray.4'
              }
            >
              {link.name}
            </Button>
          </NextLink>
        ))}
      </Stack>
      <LogOut ml={16} mt={12} w="full" />

      <Flex justify="center" mb={4} mt="auto">
        <Image src={logo} alt="Burn Up Records logo" title="Burn Up Records" />
      </Flex>
    </Flex>
  )
}
