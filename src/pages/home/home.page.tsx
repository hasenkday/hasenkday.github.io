import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/button'
import { toggleTheme } from '@/hooks/use-theme'

export function HomePage() {
  return (
    <div className="bg-dark text-light flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <ul className="space-y-2">
        <li>
          <Link to="/cases/case1" className="text-primary underline">
            {' '}
            case 1
          </Link>
        </li>

        <li>
          <Link to="/cases/case2" className="text-primary underline">
            case 2
          </Link>
        </li>
      </ul>

      <Button onClick={toggleTheme} variant="primary">
        theme switcher
      </Button>
    </div>
  )
}
