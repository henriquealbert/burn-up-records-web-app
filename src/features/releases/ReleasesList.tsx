import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons'
import { Row, Col, Pagination, Divider } from 'antd'
import * as S from './ReleasesList.styles'

export const ReleasesList = () => {
  const data = [
    {
      id: 1,
      status: 'analise',
      name: 'Release name',
      description: 'Description',
      cover:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 2,
      status: 'analise',
      name: 'Release name',
      description: 'Description',
      cover:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 3,
      status: 'analise',
      name: 'Release name',
      description: 'Description',
      cover:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 4,
      status: 'analise',
      name: 'Release name',
      description: 'Description',
      cover:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 5,
      status: 'analise',
      name: 'Release name',
      description: 'Description',
      cover:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
  ]
  return (
    <Row>
      <Row gutter={[24, 24]}>
        {data.map((item) => (
          <Col span={6} key={item.id}>
            <S.CardGrid>
              <S.CustomCard
                cover={<img alt={item.name} src={item.cover} />}
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
                <S.Description>{item.description}</S.Description>
              </S.CustomCard>
            </S.CardGrid>
          </Col>
        ))}
      </Row>
      <Divider style={{ margin: '16px' }} />
      <Pagination size="small" total={50} style={{ margin: '0 auto' }} />
    </Row>
  )
}
