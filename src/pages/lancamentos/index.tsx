import { useAllReleasesQuery } from 'graphql/generated'
import { PrivateLayout, ErrorMessage } from 'components'
import { ReleaseListSkeleton, ReleaseList } from 'modules/Releases/components'

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
