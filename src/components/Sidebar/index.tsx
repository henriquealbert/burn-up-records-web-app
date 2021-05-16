import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Profile } from 'components/Profile'
import { sidebarLinks } from './sidebarLinks'

export const Sidebar = () => {
  const router = useRouter()
  return (
    <Box
      w="100%"
      h="100vh"
      bgColor="white"
      boxShadow="6px 0px 18px rgba(0, 0, 0, 0.06)"
      zIndex="sticky"
    >
      <Flex
        borderBottom="2px solid"
        borderColor="gray.100"
        h="60px"
        align="center"
      >
        <Heading as="h1" size="md" pl="24px" color="red.600">
          Burn Up Records
        </Heading>
      </Flex>

      <Profile info p="24px 24px 40px" />

      <Stack>
        {sidebarLinks.map((link) => (
          <Link key={link.name} href={link.path} passHref>
            <Button
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={link.icon}
              color={router.pathname === link.path ? 'red.500' : 'gray.500'}
              pl="24px"
            >
              {link.name}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}
