import { Icon } from '@chakra-ui/react'
import { BiRocket, BiAlbum, BiHeart, BiHeadphone } from 'react-icons/bi'

export const sidebarLinks = [
  {
    path: '/releases',
    name: 'Lançamentos',
    icon: <Icon as={BiRocket} w={6} h={6} />
  },
  {
    path: '/statements',
    name: 'Extrato',
    icon: <Icon as={BiAlbum} w={6} h={6} />
  },
  {
    path: '/artists',
    name: 'Artistas',
    icon: <Icon as={BiHeart} w={6} h={6} />
  },
  {
    path: '/profile',
    name: 'Minha Conta',
    icon: <Icon as={BiHeadphone} w={6} h={6} />
  }
]
