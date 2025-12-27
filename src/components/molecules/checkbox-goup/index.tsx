import { cn } from '@/lib/utils'

import styles from './checkbox-goup.module.css'
type CheckboxGoupProps = { className?: string }

export function CheckboxGoup({ className }: CheckboxGoupProps) {
  return <div className={cn(styles.root, className)}> CheckboxGoup</div>
}
