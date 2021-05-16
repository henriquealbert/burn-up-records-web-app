import { Layout } from 'components/Layout'
import { PageHeader } from 'components/PageHeader'
import React from 'react'

export default function ReleasesPage() {
  return (
    <Layout>
      <PageHeader
        title="Lançamentos"
        onClick={() => alert('testing')}
        buttonText="Novo lançamento"
        breadcrumbs={[
          { title: 'Início', href: '/dashboard' },
          { title: 'Lançamentos', href: '/releases', isCurrentPage: true }
        ]}
      />
    </Layout>
  )
}
