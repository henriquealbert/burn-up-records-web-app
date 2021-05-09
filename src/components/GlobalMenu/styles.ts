import styled from 'styled-components'
import { presetDarkPalettes } from '@ant-design/colors'

import { Layout, Dropdown } from 'antd'
const { Header } = Layout

export const HeaderWrapper = styled(Header)`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  height: 48px;
  background: ${presetDarkPalettes.grey[0]};
  padding: 0 16px;
`

export const DropdownWrapper = styled(Dropdown)`
  justify-self: flex-end;
  margin-left: auto;
`

export const AvatarWrapper = styled.div`
  &:hover {
    background-color: ${presetDarkPalettes[2]};
  }
`
