import { cn } from '@/lib/cn'

import styles from './select-field.module.css'

type SelectFieldProps = { className?: string }

export function SelectField({ className }: SelectFieldProps) {
  return <div className={cn(styles.root, className)}>SelectField</div>
}
