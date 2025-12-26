import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/button'
import { SunIcon } from '@/components/icons'
import { toggleTheme } from '@/hooks/use-theme'

import { NavItems } from './nav-items'
import HeaderSideNav from './side-nav'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-light border-dark/10 sticky top-0 border-b">
      <div className="page-section flex items-center justify-between p-4 md:px-12 md:py-5">
        {/* Logo / Brand */}
        <div>
          <span className="font-primary">Nadia Hase.</span>
        </div>

        <nav className="hidden gap-1 sm:flex">
          {NavItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                to={item.url}
                target={item.target}
                state={{ scrollTo: item.scrollTo }}
                className="text-dark text-btn-sm font-primary px-5 py-2 font-medium"
              >
                {Icon && <Icon size={20} />}
                {item.icon ? '' : item.name}
              </Link>
            )
          })}

          <Button onClick={toggleTheme} variant="primary">
            <SunIcon />
          </Button>

          {/* lang switcher */}
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="sm:hidden"
        >
          ☰
        </button>
      </div>

      {/* Overlay  */}
      {isOpen && <HeaderSideNav />}
    </header>
  )
}
