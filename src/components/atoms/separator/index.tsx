import { Separator as UiSeparator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import styles from './separator.module.css'

type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Separator({ orientation = 'horizontal', className }: SeparatorProps) {
  return (
    <UiSeparator
      orientation={orientation}
      className={cn(styles.root, styles[orientation], className)}
    />
  )
}
