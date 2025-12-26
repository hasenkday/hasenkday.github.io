import { cn } from '@/lib/cn'

import styles from './checkbox-field.module.css'

type CheckboxFieldProps = { className?: string }

export function CheckboxField({ className }: CheckboxFieldProps) {
  return <div className={cn(styles.root, className)}>CheckboxField</div>
}
