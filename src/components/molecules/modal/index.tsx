import { cn } from '@/lib/cn'

import styles from './modal.module.css'

type ModalProps = { className?: string }

export function Modal({ className }: ModalProps) {
  return <div className={cn(styles.root, className)}>Modal</div>
}
