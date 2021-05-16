import { Layout } from 'components/Layout'
import { PageHeader } from 'components/PageHeader'

export default function TracksPage() {
  return (
    <Layout>
      <PageHeader
        title="Músicas"
        onClick={() => alert('testing')}
        buttonText="Nova música"
        breadcrumbs={[
          { title: 'Início', href: '/dashboard' },
          { title: 'Músicas', href: '/tracks', isCurrentPage: true }
        ]}
      />
    </Layout>
  )
}
