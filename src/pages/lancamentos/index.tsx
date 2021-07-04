import { useAllReleasesQuery } from 'graphql/generated'
import { PrivateLayout, ErrorMessage } from 'components'
import { ReleaseListSkeleton, ReleaseList } from 'modules/releases/components'

export default function ReleasesPage() {
  const { data, isError, isLoading } = useAllReleasesQuery()
  return (
    <PrivateLayout pageTitle="Lançamentos">
      <>
        {isLoading && <ReleaseListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <ReleaseList data={data} />}
      </>
    </PrivateLayout>
  )
}
