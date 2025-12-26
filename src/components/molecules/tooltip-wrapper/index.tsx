import { cn } from '@/lib/cn'

import styles from './tooltip-wrapper.module.css'

type TooltipWrapperProps = { className?: string }

export function TooltipWrapper({ className }: TooltipWrapperProps) {
  return <div className={cn(styles.root, className)}>TooltipWrapper</div>
}
