import { ReactNode } from 'react'

import { GlobalMenu } from 'components/GlobalMenu'
import { Sidebar } from 'components/Sidebar'
import * as S from './styles'

export type LayoutWrapperProps = {
  children: ReactNode
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <S.LayoutWrapper>
      <Sidebar />

      <S.BodyWrapper>
        <GlobalMenu />

        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.BodyWrapper>
    </S.LayoutWrapper>
  )
}
