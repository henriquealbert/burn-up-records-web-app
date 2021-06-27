import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { RegisterModule } from 'modules/register'

export default function RegisterPage() {
  const [session] = useSession()
  const { push } = useRouter()

  if (session) push('/releases')

  return <RegisterModule />
}
