import styled from 'styled-components'
import { presetDarkPalettes } from '@ant-design/colors'

import { Layout } from 'antd'
const { Sider } = Layout

export const SiderWrapper = styled(Sider)`
  background: ${presetDarkPalettes.grey[1]};
`

export const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`
