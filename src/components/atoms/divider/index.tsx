import { cn } from '@/lib/cn'

import styles from './divider.module.css'

type DividerProps = { className?: string }

export function Divider({ className }: DividerProps) {
  return <div className={cn(styles.root, className)}>Divider</div>
}
