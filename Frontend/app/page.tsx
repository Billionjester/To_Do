import { Metadata } from 'next' // for SEO purposes
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/dashboard">Dashboard</Link>
      {/* if to scroll to particular id  */}
      {/* <Link href="/dashboard#settings">Settings</Link> */}
    </div>
  )
}