import { Layout } from 'components/Layout'
import { PageHeader } from 'components/PageHeader'

export default function ArtistsPage() {
  return (
    <Layout>
      <PageHeader
        title="Artistas"
        buttonText="Novo artista"
        onClick={() => alert('novo artista')}
        breadcrumbs={[
          { title: 'Início', href: '/dashboard' },
          { title: 'Artistas', href: '/artists', isCurrentPage: true }
        ]}
      />
    </Layout>
  )
}
