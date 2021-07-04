import {
  PrivateLayout,
  GridList,
  ErrorMessage,
  GridListSkeleton
} from 'components'
import { useAllReleasesQuery } from 'graphql/generated'

export default function ReleasesPage() {
  const { data, isError, isLoading } = useAllReleasesQuery()
  return (
    <PrivateLayout pageTitle="Lançamentos">
      <>
        {isLoading && <GridListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <GridList data={data} />}
      </>
    </PrivateLayout>
  )
}
