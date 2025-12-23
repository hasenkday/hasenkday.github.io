import { useParams, Link } from 'react-router-dom'

export function CasePage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="mx-auto max-w-3xl p-6">
      <Link to="/" className="text-sm text-primary underline">
        ← Back to home
      </Link>

      <h1 className="mt-6 text-2xl font-bold">
        Case: {slug}
      </h1>

      <p className="mt-4 text-muted">
        Case content goes here.
      </p>
    </div>
  )
}