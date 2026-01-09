import { useParams, Link } from 'react-router-dom'

import { PageSummary } from '@/components/molecules/page-summary'
import { PageWithSidebar } from '@/layouts/page-with-sidebar'

const caseSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'results', label: 'Results' },
]

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <PageWithSidebar
      sidebar={<PageSummary title="Case Summary" items={caseSections} offset={96} />}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-10 p-6">
        <Link to="/" className="text-primary text-sm underline">
          ← Back to home
        </Link>

        <h1 className="text-center">{slug}</h1>

        <section id="overview">
          <h2>Overview</h2>
          <p className="text-muted mt-4">Content here...</p>
        </section>

        <section id="problem">
          <h2>Problem</h2>
          <p className="text-muted mt-4">Content here...</p>
        </section>

        <section id="solution">
          <h2>Solution</h2>
          <p className="text-muted mt-4">Content here...</p>
        </section>

        <section id="results">
          <h2>Results</h2>
          <p className="text-muted mt-4">Content here...</p>
        </section>
      </div>
    </PageWithSidebar>
  )
}
