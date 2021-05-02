import { useState } from 'react'
import { useRouter } from 'next/router'

import { Menu } from 'antd'
import {
  OrderedListOutlined,
  PlusCircleFilled,
  RocketFilled,
  SettingFilled,
  UserOutlined
} from '@ant-design/icons'

import * as S from './styles'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const router = useRouter()

  const handleOpenSubMenus = () => {
    if (router.pathname.includes('/releases')) {
      return 'sub-releases'
    }
    if (router.pathname.includes('/conta')) {
      return 'sub-conta'
    }
    return ''
  }

  return (
    <S.SiderWrapper
      collapsible={true}
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <S.Logo />

      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={[handleOpenSubMenus()]}
        defaultSelectedKeys={[router.pathname]}
      >
        <Menu.SubMenu
          key="sub-releases"
          icon={<RocketFilled rotate={35} />}
          title="Releases"
        >
          <Menu.Item
            key="/releases"
            onClick={() => router.push('/releases')}
            icon={<OrderedListOutlined />}
          >
            Todos os releases
          </Menu.Item>
          <Menu.Item
            key="/releases/criar-release"
            onClick={() => router.push('/releases/criar-release')}
            icon={<PlusCircleFilled />}
          >
            Criar um release
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="sub-conta" icon={<UserOutlined />} title="Conta">
          <Menu.Item
            key="/conta"
            icon={<UserOutlined />}
            onClick={() => router.push('/conta')}
            title="Conta"
          >
            Minha Conta
          </Menu.Item>
          <Menu.Item
            key="/conta/configuracoes"
            icon={<SettingFilled />}
            onClick={() => router.push('/conta/configuracoes')}
            title="Configurações"
          >
            Configurações
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </S.SiderWrapper>
  )
}
