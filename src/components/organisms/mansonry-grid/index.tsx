import { cn } from '@/lib/utils'

import styles from './mansonry-grid.module.css'

type MansonryGridProps = { className?: string }

export function MansonryGrid({ className }: MansonryGridProps) {
  return <div className={cn(styles.root, className)}>MansonryGrid</div>
}
