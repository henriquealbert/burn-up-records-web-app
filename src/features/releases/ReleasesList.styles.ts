import styled from 'styled-components'
import { Card, Tag, Typography } from 'antd'

export const CustomCard = styled(Card)`
  width: 100%;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center center;
  }
`

export const CardGrid = styled(Card.Grid)`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

export const Status = styled(Tag)`
  margin: 0;
`

export const Description = styled(Typography.Text)`
  margin: 0;
`
