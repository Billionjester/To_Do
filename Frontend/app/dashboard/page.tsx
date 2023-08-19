// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <h1>Hello, Dashboard Page!</h1>
            <Link href="/">home</Link>
        </div>
    )
}