import styled from 'styled-components'
import { presetDarkPalettes } from '@ant-design/colors'

import { Layout } from 'antd'
const { Content } = Layout

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
`

export const BodyWrapper = styled(Layout)`
  background: #000;
`

export const ContentWrapper = styled(Content)`
  background: ${presetDarkPalettes.grey[2]};
  min-height: 280px;
  height: 100%;
  width: 100%;
  padding: 24px;
`
