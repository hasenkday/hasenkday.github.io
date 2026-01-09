import { Button } from '@/components/atoms/button'
import { SwitchField } from '@/components/atoms/switch-field'
import { SunIcon, MoonIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

import styles from './header.module.css'
import { NavList } from './nav-list'

type HeaderSideNavProps = {
  open: boolean
  isDark: boolean
  onThemeChange: (checked: boolean) => void
  onClose: () => void
}

export default function HeaderSideNav({
  open,
  isDark,
  onThemeChange,
  onClose,
}: HeaderSideNavProps) {
  return (
    <div
      className={cn(styles.sideNavRoot, open ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!open}
    >
      {/* backdrop */}
      <div className={cn(styles.backdrop, open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />

      {/* side nav */}
      <aside className={cn(styles.sidePanel, open ? 'translate-x-0' : 'translate-x-full')}>
        <div className={styles.sidePanelHeader}>
          <SwitchField
            variant="icon"
            checked={isDark}
            onCheckedChange={onThemeChange}
            offIcon={<SunIcon />}
            onIcon={<MoonIcon />}
          />

          <Button
            aria-label="Close menu"
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="-mr-2 md:mr-0"
          >
            ✕
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto pb-6">
          <NavList onNavigate={onClose} />
        </div>
      </aside>
    </div>
  )
}
