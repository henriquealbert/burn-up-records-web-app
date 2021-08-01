import { useAllReleasesQuery } from 'graphql/generated'
import { PrivateLayout, ErrorMessage } from 'components'
import { ReleaseListSkeleton, ReleaseList } from 'modules/releases/components'
import { useAuth } from 'auth'

export default function ReleasesPage() {
  const { me } = useAuth()
  const { data, isError, isLoading } = useAllReleasesQuery(
    {
      id: me?.user?.id as string
    },
    {
      enabled: !!me?.user?.id
    }
  )

  return (
    <PrivateLayout pageTitle="Lançamentos">
      <>
        {isLoading && <ReleaseListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <ReleaseList releases={data?.user?.releases} />}
      </>
    </PrivateLayout>
  )
}
