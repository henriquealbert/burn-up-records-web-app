import { PrivateLayout, ErrorMessage } from 'components'
import { ReleaseListSkeleton, ReleaseList } from 'modules/releases/components'
import { useAuth } from 'auth'
import { useGetReleasesByUserIdQuery } from 'graphql/generated'

export default function ReleasesPage() {
  const { me, isMeLoading } = useAuth()
  const { data, isError, isLoading } = useGetReleasesByUserIdQuery(
    { userId: me?.id },
    { enabled: !isMeLoading && !!me?.id }
  )

  return (
    <PrivateLayout>
      <>
        {isLoading && <ReleaseListSkeleton />}
        {isError && <ErrorMessage />}
        {data && <ReleaseList releases={data?.releasesByUserId} />}
      </>
    </PrivateLayout>
  )
}
