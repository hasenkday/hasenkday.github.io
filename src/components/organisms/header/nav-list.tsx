import { Button } from '@/components/atoms/button'
import { NavLink } from '@/components/atoms/nav-link'
import { SelectField } from '@/components/atoms/select-field'
import { cn } from '@/lib/utils'

import { NavItems } from './nav-items'

type NavListProps = {
  onNavigate?: () => void
}

export function NavList({ onNavigate }: NavListProps) {
  return (
    <nav className="mt-8 flex flex-col gap-4">
      {NavItems.map((item) => (
        <Button
          key={item.name}
          asChild
          variant="ghost"
          size="sm"
          className={'text-md! justify-start!'}
        >
          <NavLink
            type={item.type}
            value={item.value}
            target={item.target}
            onNavigate={onNavigate}
            className="flex items-center gap-2"
          >
            {item.name}
            {item.icon && <item.icon size={20} />}
          </NavLink>
        </Button>
      ))}

      <SelectField
        className="font-primary tracking-sm text-md ml-3 font-medium"
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
