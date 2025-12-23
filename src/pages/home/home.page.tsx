import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/button'

export function HomePage() {
  const cookie = () => {
    alert('🍪')
  }

  return (
    <div className="bg-dark text-light flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <ul className="space-y-2">
        <li>
          <Link to="/case/case1" className="text-primary underline">
            {' '}
            case 1
          </Link>
        </li>

        <li>
          <Link to="/case/case2" className="text-primary underline">
            case 2
          </Link>
        </li>
      </ul>

      <Button onClick={cookie} variant="primary">
        A click, a cookie
      </Button>
    </div>
  )
}
