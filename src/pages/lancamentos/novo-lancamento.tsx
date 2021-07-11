import { PrivateLayout } from 'components'
import { NewRelease } from 'modules/NewRelease'

export default function NewReleasePage() {
  return (
    <PrivateLayout header={false} whitebox={false}>
      <NewRelease />
    </PrivateLayout>
  )
}
