import { signout } from 'next-auth/client'
import { BiPowerOff } from 'react-icons/bi'
import { Icon, Button, ButtonProps } from '@chakra-ui/react'
import { parseCallbackUrl } from 'helpers'

export const LogOut = (props: ButtonProps) => (
  <Button
    variant="menu"
    leftIcon={<Icon as={BiPowerOff} w={6} h={6} />}
    onClick={() =>
      signout({ redirect: false, callbackUrl: parseCallbackUrl('/') })
    }
    {...props}
  >
    Sair
  </Button>
)
