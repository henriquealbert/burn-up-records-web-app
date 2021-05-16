import { Layout } from 'components/Layout'
import { PageHeader } from 'components/PageHeader'

export default function ProfilePage() {
  return (
    <Layout>
      <PageHeader
        title="Minha conta"
        breadcrumbs={[
          { title: 'Início', href: '/dashboard' },
          { title: 'Conta', href: '/profile', isCurrentPage: true }
        ]}
      />
    </Layout>
  )
}
