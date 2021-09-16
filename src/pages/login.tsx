import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { LoginModule } from 'modules/Login'

export default function LoginPage() {
  const { data: session } = useSession()
  const { push } = useRouter()

  if (session) push('/lancamentos')

  return <LoginModule />
}
