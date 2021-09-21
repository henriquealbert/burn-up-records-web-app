import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { LoginModule } from 'modules/Login'

export default function LoginPage() {
  const [session] = useSession()
  const { push } = useRouter()

  if (session) push('/lancamentos')

  return <LoginModule />
}
