import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className="page-section">
      <div className="section-container px-4 py-8 text-center md:px-12 md:py-8">
        Hero
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
      </div>
    </div>
  )
}
