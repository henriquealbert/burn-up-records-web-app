import { Button, Menu } from 'antd'
import Router from 'next/router'

import * as S from './styles'

export const GlobalMenu = () => {
  return (
    <S.HeaderWrapper>
      <S.DropdownWrapper overlay={MenuDrop} placement="bottomRight">
        <Button type="text" size="large">
          Henrique
        </Button>
      </S.DropdownWrapper>
    </S.HeaderWrapper>
  )
}

const MenuDrop = () => {
  return (
    <Menu>
      <Menu.Item onClick={() => Router.push('/conta')}>Minha conta</Menu.Item>
      <Menu.Item onClick={() => Router.push('/conta/configuracoes')}>
        Configurações
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>Sair</Menu.Item>
    </Menu>
  )
}
