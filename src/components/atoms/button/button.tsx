import { cn } from '@/lib/cn'

import styles from './button.module.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 transition',
        styles.root,
        styles[variant],
        className
      )}
      {...props}
    />
  )
}
