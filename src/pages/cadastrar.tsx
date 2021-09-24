import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import { RegisterModule } from 'modules/Register'

export default function RegisterPage() {
  const [session] = useSession()
  const { push } = useRouter()

  if (session) push('/lancamentos')

  return <RegisterModule />
}
