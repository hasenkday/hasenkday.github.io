import { cn } from '@/lib/cn'

import styles from './label.module.css'

type LabelProps = { className?: string }

export function Label({ className }: LabelProps) {
  return <div className={cn(styles.root, className)}>Label</div>
}
