import { cn } from '@/lib/utils'

import styles from './form-field.module.css'

type FormFieldProps = { className?: string }

export function FormField({ className }: FormFieldProps) {
  return <div className={cn(styles.root, className)}>FormField</div>
}
