import { cn } from '@/lib/cn'

import styles from './dropdown.module.css'

type DropdownProps = { className?: string }

export function Dropdown({ className }: DropdownProps) {
  return <div className={cn(styles.root, className)}>Dropdown</div>
}
