import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button, Flex, Stack } from '@chakra-ui/react'

import { LogOut } from './LogOut'
import { sidebarLinks } from './sidebarLinks'
import { Profile, ChakraNextImage } from 'components'

export const Sidebar = () => {
  const router = useRouter()
  return (
    <Flex
      direction="column"
      w="full"
      h="calc(100vh - 64px)"
      bgColor="white"
      zIndex="sticky"
    >
      <Profile mt={14} />
      <Flex justify="center" mt={6} mb={10}>
        <NextLink passHref href="/lancamentos/novo-lancamento">
          <Button as="a" cursor="pointer" variant="primary">
            Lançar Track
          </Button>
        </NextLink>
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
        <ChakraNextImage
          src="/logo.svg"
          width="117px"
          height="65px"
          alt="Burn Up Records logo"
          title="Burn Up Records"
          loading="eager"
        />
      </Flex>
    </Flex>
  )
}
