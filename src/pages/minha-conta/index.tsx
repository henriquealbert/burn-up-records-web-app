import { Layout } from 'components/Layout'
import { PageHeader } from 'components/PageHeader'

export default function ProfilePage() {
  return (
    <Layout>
      <PageHeader
        title="Minha conta"
        breadcrumbs={[
          { title: 'Início', href: '/lancamentos' },
          { title: 'Conta', href: '/minha-conta', isCurrentPage: true }
        ]}
      />
    </Layout>
  )
}
