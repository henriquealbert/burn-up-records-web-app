import {
  PrivateLayout,
  GridList,
  ErrorMessage,
  GridListSkeleton
} from 'components'
import { useAllReleasesQuery } from 'graphql/generated'
import { useSession } from 'next-auth/client'

export default function ReleasesPage() {
  const [session] = useSession()
  // const { data, isError, isLoading } = useAllReleasesQuery()
  return (
    <PrivateLayout>
      {/*
      <>
        {isLoading && <GridListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <GridList data={data} />}
      </> */}
    </PrivateLayout>
  )
}
