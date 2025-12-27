import { cn } from '@/lib/utils'

import styles from './tag.module.css'

type TagVariant = 'primary' | 'secondary' | 'ghost'

type TagProps = {
  children: React.ReactNode
  variant?: TagVariant
  className?: string
}

export function Tag({ children, variant = 'primary', className }: TagProps) {
  return <span className={cn(styles.root, styles[variant], className)}>{children}</span>
}
