import { cn } from '@/lib/utils'

import styles from './card.module.css'
type CardProps = { className?: string }

export function Card({ className }: CardProps) {
  return <div className={cn(styles.root, className)}> Card</div>
}
