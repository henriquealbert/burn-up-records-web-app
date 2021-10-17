import { useAuth } from 'auth'
import { PrivateLayout, ErrorMessage } from 'components'
import { useGetReleasesByUserIdQuery } from 'graphql/generated'
import { ReleaseList } from 'modules/Releases'
import { ReleaseListSkeleton } from 'modules/Releases/components'

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
