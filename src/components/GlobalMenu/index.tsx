import { Button, Menu } from 'antd'

import * as S from './styles'

export const GlobalMenu = () => (
  <S.HeaderWrapper>
    <S.DropdownWrapper overlay={menu}>
      <Button>Henrique</Button>
    </S.DropdownWrapper>
  </S.HeaderWrapper>
)

const menu = (
  <Menu>
    <Menu.Item>Minha conta</Menu.Item>
    <Menu.Item>Configurações</Menu.Item>
    <Menu.Item>Sair</Menu.Item>
  </Menu>
)
