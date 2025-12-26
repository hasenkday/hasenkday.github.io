import { cn } from '@/lib/cn'

import styles from './input-field.module.css'

type InputFieldProps = { className?: string }

export function InputField({ className }: InputFieldProps) {
  return <div className={cn(styles.root, className)}>InputField</div>
}
