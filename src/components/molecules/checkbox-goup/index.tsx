import { cn } from '@/lib/cn'

import styles from './checkbox-goup.module.css'
type CheckboxGoupProps = { className?: string }

export function CheckboxGoup({ className }: CheckboxGoupProps) {
  return <div className={cn(styles.root, className)}> CheckboxGoup</div>
}
