import { cn } from '@/lib/cn'

import styles from './radio-field.module.css'

type RadioFieldProps = { className?: string }

export function RadioField({ className }: RadioFieldProps) {
  return <div className={cn(styles.root, className)}>RadioField</div>
}
