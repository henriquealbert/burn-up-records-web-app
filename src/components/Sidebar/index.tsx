import { useState } from 'react'
import { useRouter } from 'next/router'

import { Menu } from 'antd'
import { HomeFilled, RocketFilled, UserOutlined } from '@ant-design/icons'

import * as S from './styles'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const router = useRouter()

  return (
    <S.SiderWrapper
      collapsible={true}
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <S.Logo />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.pathname]}>
        <Menu.Item
          key="/"
          icon={<HomeFilled />}
          onClick={() => router.push('/')}
          title="Dashboard"
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="/releases"
          icon={<RocketFilled rotate={35} />}
          onClick={() => router.push('/releases')}
          title="Releases"
        >
          Releases
        </Menu.Item>
        <Menu.Item
          key="/conta"
          icon={<UserOutlined />}
          onClick={() => router.push('/conta')}
          title="Conta"
        >
          Conta
        </Menu.Item>
      </Menu>
    </S.SiderWrapper>
  )
}
