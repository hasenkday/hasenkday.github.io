import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/button'
import { toggleTheme } from '@/hooks/use-theme'

import { GithubIcon, LinkedinIcon, SunIcon } from '../icons'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const githubUrl = import.meta.env.VITE_GITHUB_URL
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL

  const NavItems = [
    {
      name: 'Cases',
      url: '/',
      target: '',
      scrollTo: 'cases',
      icon: undefined,
    },
    {
      name: 'About',
      url: '/',
      target: '',
      scrollTo: 'about',
      icon: undefined,
    },
    {
      name: 'Contact',
      url: '/',
      target: '',
      scrollTo: 'contact',
      icon: undefined,
    },
    {
      name: 'Github',
      url: githubUrl,
      target: '_blank',
      scrollTo: '',
      icon: <GithubIcon />,
    },
    {
      name: 'Linkedin',
      url: linkedinUrl,
      target: '_blank',
      scrollTo: '',
      icon: <LinkedinIcon />,
    },
  ]

  return (
    <header className="bg-light border-dark/10 sticky top-0 border-b">
      <div className="page-section flex items-center justify-between p-4 md:px-12 md:py-5">
        {/* Logo / Brand */}
        <div>
          <span className="font-primary">Nadia Hase.</span>
        </div>

        <nav className="hidden gap-1 sm:flex">
          {NavItems.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.url}
                target={item.target}
                state={{ scrollTo: item.scrollTo }}
                className="text-dark text-btn-sm font-primary px-5 py-2 font-medium"
              >
                {item.icon || ''}
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
