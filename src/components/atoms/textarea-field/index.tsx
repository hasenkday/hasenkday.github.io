import { cn } from '@/lib/cn'

import styles from './textarea-field.module.css'

type TextareaFieldProps = { className?: string }

export function TextareaField({ className }: TextareaFieldProps) {
  return <div className={cn(styles.root, className)}>TextareaField</div>
}
