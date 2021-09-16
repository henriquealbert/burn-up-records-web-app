import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { RegisterModule } from 'modules/Register'

export default function RegisterPage() {
  const { data: session } = useSession()
  const { push } = useRouter()

  if (session) push('/lancamentos')

  return <RegisterModule />
}
