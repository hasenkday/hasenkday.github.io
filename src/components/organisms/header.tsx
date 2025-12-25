import { useState } from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-light sticky top-0">
      <div className="page-section">
        <div className="section-container flex items-center justify-between p-4 md:px-12 md:py-5">
          {/* Logo / Brand */}
          <div>
            <span className="font-primary">Nadia Hase.</span>
          </div>

          {/* Desktop nav (hidden for now, you can add later) */}
          <nav className="hidden gap-1 sm:flex">
            <Link to="#cases" className="text-dark text-btn-sm font-primary px-5 py-2 font-medium">
              {' '}
              Cases
            </Link>

            <Link to="#about" className="text-dark text-btn-sm font-primary px-5 py-2 font-medium">
              {' '}
              About
            </Link>

            <Link
              to="#contact"
              className="text-dark text-btn-sm font-primary px-5 py-2 font-medium"
            >
              {' '}
              About
            </Link>

            {/* github, linkedin, theme switcher, lang switcher */}
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
      </div>

      {/* Overlay  */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <div className="bg-dark/40 absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* side nav */}
          <aside className="bg-light absolute top-0 right-0 h-full w-[220px]">
            <div className="flex h-full flex-col p-6">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="self-end"
              >
                ✕
              </button>

              <nav className="mt-8 flex flex-col gap-4">
                <a href="#/">Home</a>
                <a href="#/gallery">Gallery</a>
                <a href="#/cases">Cases</a>
              </nav>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
