import { Layout } from 'components/Layout'
import { PageHeader } from 'components/PageHeader'
import { Whitebox } from 'components/Whitebox'
import { GridList } from 'components/GridList'
import { ErrorMessage } from 'components/ErrorMessage'
import { GridListSkeleton } from 'components/GridList/GridListSkeleton'
import { useAllReleasesQuery } from 'graphql/generated'

export default function ReleasesPage() {
  const { data, isError, isLoading } = useAllReleasesQuery()
  console.log(data)
  return (
    <Layout>
      {/* <PageHeader
        title="Lançamentos"
        onClick={() => alert('testing')}
        buttonText="Novo lançamento"
        breadcrumbs={[
          { title: 'Início', href: '/releases' },
          { title: 'Lançamentos', href: '/releases', isCurrentPage: true }
        ]}
      />
      <Whitebox>
        {isLoading && <GridListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <GridList data={data} />}
      </Whitebox> */}
    </Layout>
  )
}
