import { cn } from '@/lib/utils'

import styles from './tag.module.css'
import type { TagProps } from './types'

export function Tag({ children, variant = 'fill', color = 'default', className }: TagProps) {
  return (
    <span className={cn(styles.root, styles[variant], styles[color], className)}>{children}</span>
  )
}
