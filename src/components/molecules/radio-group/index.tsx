import { cn } from '@/lib/utils'

import styles from './radio-group.module.css'

type RadioGroupProps = { className?: string }

export function RadioGroup({ className }: RadioGroupProps) {
  return <div className={cn(styles.root, className)}>RadioGroup</div>
}
