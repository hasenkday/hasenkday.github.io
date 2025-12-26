import { cn } from '@/lib/cn'

import styles from './switch-field.module.css'

type SwitchFieldProps = { className?: string }

export function SwitchField({ className }: SwitchFieldProps) {
  return <div className={cn(styles.root, className)}>SwitchField</div>
}
