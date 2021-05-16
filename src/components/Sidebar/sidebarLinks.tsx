import { Icon } from '@chakra-ui/react'
import {
  RiDashboardLine,
  RiUserStarLine,
  RiMusic2Line,
  RiContactsLine
} from 'react-icons/ri'
import { BiAlbum } from 'react-icons/bi'

export const sidebarLinks = [
  {
    path: '/dashboard',
    name: 'Início',
    icon: <Icon as={RiDashboardLine} />
  },
  {
    path: '/releases',
    name: 'Lançamentos',
    icon: <Icon as={BiAlbum} />
  },
  {
    path: '/artists',
    name: 'Artistas',
    icon: <Icon as={RiUserStarLine} />
  },
  {
    path: '/tracks',
    name: 'Músicas',
    icon: <Icon as={RiMusic2Line} />
  },
  {
    path: '/profile',
    name: 'Conta',
    icon: <Icon as={RiContactsLine} />
  }
]
