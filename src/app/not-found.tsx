import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-white/80 mb-8">This page could not be found.</p>
        <Link href="/" className="btn-glossy">Go home</Link>
      </div>
    </div>
  )
}


