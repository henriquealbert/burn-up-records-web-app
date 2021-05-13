import { Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/auth/register" passHref>
        <Button>Register</Button>
      </Link>
    </div>
  )
}
