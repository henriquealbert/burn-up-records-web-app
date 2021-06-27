import {
  PrivateLayout,
  GridList,
  ErrorMessage,
  GridListSkeleton,
  Onboarding
} from 'components'
import { useAllReleasesQuery } from 'graphql/generated'

export default function ReleasesPage() {
  // const { data, isError, isLoading } = useAllReleasesQuery()
  return (
    <PrivateLayout>
      {/*
      <>
        {isLoading && <GridListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <GridList data={data} />}
      </> */}
      <Onboarding />
    </PrivateLayout>
  )
}
