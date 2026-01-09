import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/button'
import { SelectField } from '@/components/atoms/select-field'

import { NavItems } from './nav-items'

type NavListProps = {
  onNavigate?: () => void
}

export function NavList({ onNavigate }: NavListProps) {
  return (
    <nav className="mt-8 flex flex-col gap-4">
      {NavItems.map((item) => {
        const isExternal = item.href.startsWith('http')
        const Icon = item.icon

        return (
          <Button key={item.name} asChild variant="ghost" size="sm" className="justify-start!">
            <Link
              to={item.href}
              onClick={onNavigate}
              target={item.target}
              rel={isExternal ? 'noopener noreferrer' : ''}
            >
              {item.name}
              {Icon && <Icon size={20} />}
            </Link>
          </Button>
        )
      })}

      <SelectField
        className="font-primary tracking-sm ml-3 text-sm font-medium"
        variant="ghost"
        value="br"
        options={[
          { value: 'br', label: 'PT-BR' },
          { value: 'us', label: 'EN-US' },
        ]}
      />
    </nav>
  )
}
