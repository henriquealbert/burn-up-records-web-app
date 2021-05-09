import { Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Landing Page</p>
      <Link href="/releases">
        <Button type="primary">Log-in</Button>
      </Link>
    </div>
  )
}
