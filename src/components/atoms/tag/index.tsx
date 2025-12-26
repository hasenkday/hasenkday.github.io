import { cn } from '@/lib/cn'

import styles from './tag.module.css'

type TagProps = { className?: string }

export function Tag({ className }: TagProps) {
  return <div className={cn(styles.root, className)}>Tag</div>
}
