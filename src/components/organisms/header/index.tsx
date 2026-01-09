import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/button'
import { SelectField } from '@/components/atoms/select-field'
import { SwitchField } from '@/components/atoms/switch-field'
import { SunIcon, MoonIcon } from '@/components/icons'
import { toggleTheme } from '@/hooks/use-theme'

import styles from './header.module.css'
import { NavItems } from './nav-items'
import HeaderSideNav from './side-nav'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  function handleThemeChange(checked: boolean) {
    setIsDark(checked)
    toggleTheme(checked)
  }

  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        {/* Logo */}
        <span className={styles.logo}>Nadia Hase.</span>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {NavItems.map((item) => {
            const Icon = item.icon

            return (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                size="sm"
                className={item.icon ? 'px-2!' : ''}
              >
                <Link to={item.href}>
                  {Icon && <Icon size={24} />}
                  {!item.icon && item.name}
                </Link>
              </Button>
            )
          })}

          <SwitchField
            className="ml-3"
            variant="icon"
            checked={isDark}
            onCheckedChange={handleThemeChange}
            offIcon={<SunIcon />}
            onIcon={<MoonIcon />}
          />

          <SelectField
            className="ml-3"
            variant="ghost"
            value="br"
            options={[
              { value: 'br', label: 'PT-BR' },
              { value: 'us', label: 'EN-US' },
            ]}
          />
        </nav>

        {/* Mobile actions */}
        <div className={styles.mobileNav}>
          <SwitchField
            variant="icon"
            checked={isDark}
            onCheckedChange={handleThemeChange}
            offIcon={<SunIcon />}
            onIcon={<MoonIcon />}
          />

          <Button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            variant="ghost"
            size="icon"
            className="self-end md:-mr-3"
          >
            ☰
          </Button>
        </div>
      </div>

      <HeaderSideNav
        open={isOpen}
        isDark={isDark}
        onThemeChange={handleThemeChange}
        onClose={() => setIsOpen(false)}
      />
    </header>
  )
}
