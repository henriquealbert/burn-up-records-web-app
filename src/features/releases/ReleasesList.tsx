import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons'
import { Row, Col, Pagination, Divider } from 'antd'
import { ReleaseTypes } from 'graphql/releases'
import { imgUrl } from 'helpers/imgUrl'

import * as S from './ReleasesList.styles'

type ReleasesListProps = {
  data: ReleaseTypes[]
}

export const ReleasesList = ({ data }: ReleasesListProps) => {
  return (
    <S.Wrapper>
      <Row gutter={[24, 24]}>
        {data.map((item) => (
          <Col span={6} key={item.id}>
            <S.CardGrid>
              <S.CustomCard
                cover={<img alt={item.name} src={imgUrl(item?.artwork.url)} />}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />
                ]}
              >
                <Row justify="space-between">
                  <S.CustomCard.Meta title={item.name} />
                  <S.Status icon={<ClockCircleOutlined />} color="warning">
                    {item.status}
                  </S.Status>
                </Row>
                <S.Description>{item?.description}</S.Description>
              </S.CustomCard>
            </S.CardGrid>
          </Col>
        ))}
      </Row>
      <S.Footer>
        <Divider style={{ margin: '16px' }} />
        <Pagination size="small" total={50} style={{ margin: '0 auto' }} />
      </S.Footer>
    </S.Wrapper>
  )
}
