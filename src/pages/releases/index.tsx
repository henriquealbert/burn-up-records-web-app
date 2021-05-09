import { LayoutWrapper } from 'components/LayoutWrapper'
import { ReleasesList } from 'features/releases/ReleasesList'

import { useReleases } from 'graphql/releases'

export default function Releases() {
  const { data, error, isLoading, isError } = useReleases()

  return (
    <LayoutWrapper>
      {isError && error?.message}
      {isLoading && 'Loading...'}
      {data && <ReleasesList data={data} />}
    </LayoutWrapper>
  )
}
