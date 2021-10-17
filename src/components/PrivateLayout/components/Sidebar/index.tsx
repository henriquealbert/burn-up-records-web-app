import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import { Button, Flex } from '@chakra-ui/react'

import { parseCallbackUrl } from 'helpers'
import { sidebarLinks } from './sidebarLinks'

export const Sidebar = () => {
  const router = useRouter()
  return (
    <Flex direction="column" as="nav">
      {sidebarLinks.map((link, index) => (
        <NextLink key={link.name} href={link.path} passHref>
          <Button
            as="a"
            variant="linkSidebar"
            mt={index === 0 ? 0 : 4}
            pb={4}
            borderBottom="1px"
            borderColor="brand.8"
            color={router.pathname === link.path ? 'black' : 'brand.3'}
            _hover={{
              color: router.pathname === link.path ? 'black' : 'brand.4'
            }}
          >
            {link.name}
          </Button>
        </NextLink>
      ))}
      <Button
        variant="linkSidebar"
        mt={4}
        pb={4}
        onClick={() =>
          signOut({ redirect: false, callbackUrl: parseCallbackUrl('/') })
        }
      >
        Sair
      </Button>
    </Flex>
  )
}
