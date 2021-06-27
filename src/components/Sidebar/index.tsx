import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react'

import { Profile } from 'components'
import { sidebarLinks } from './sidebarLinks'

export const Sidebar = () => {
  const router = useRouter()
  return (
    <Box w="100%" h="100vh" bgColor="white" zIndex="sticky" borderRadius="lg">
      <Profile />

      {/* <Stack>
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
      </Stack> */}
    </Box>
  )
}
