import { cn } from '@/lib/cn'

import styles from './input-with-label.module.css'

type InputWithLabelProps = { className?: string }

export function InputWithLabel({ className }: InputWithLabelProps) {
  return <div className={cn(styles.root, className)}>InputWithLabel</div>
}
