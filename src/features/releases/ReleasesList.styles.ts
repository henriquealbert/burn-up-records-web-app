import styled from 'styled-components'
import { Card, Tag, Typography } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const CustomCard = styled(Card)`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center center;
  }
`

export const CardGrid = styled(Card.Grid)`
  width: 100%;
  height: 335px;
  padding: 0;
  margin: 0;
`

export const Status = styled(Tag)`
  margin: 0;
`

export const Description = styled(Typography.Text)`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
