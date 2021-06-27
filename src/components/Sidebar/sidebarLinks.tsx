import { Icon } from '@chakra-ui/react'
import { BiRocket, BiAlbum, BiHeart, BiHeadphone } from 'react-icons/bi'

export const sidebarLinks = [
  {
    path: '/lancamentos',
    name: 'Lançamentos',
    icon: <Icon as={BiRocket} w={6} h={6} />
  },
  {
    path: '/extrato',
    name: 'Extrato',
    icon: <Icon as={BiAlbum} w={6} h={6} />
  },
  {
    path: '/artistas',
    name: 'Artistas',
    icon: <Icon as={BiHeart} w={6} h={6} />
  },
  {
    path: '/minha-conta',
    name: 'Minha Conta',
    icon: <Icon as={BiHeadphone} w={6} h={6} />
  }
]
