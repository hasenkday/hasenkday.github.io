import { useParams, Link } from 'react-router-dom'

export default function GalleryPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="mx-auto max-w-3xl p-6">
      <Link to="/" className="text-primary text-sm underline">
        ← Back to home
      </Link>

      <h1 className="mt-6 text-2xl font-bold">Case: {slug}</h1>

      <p className="text-muted mt-4">Case content goes here.</p>
    </div>
  )
}
