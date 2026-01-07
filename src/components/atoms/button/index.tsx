import * as React from 'react'

import { cn } from '@/lib/utils'

import styles from './button.module.css'

type ButtonVariant = 'fill' | 'outline' | 'ghost'
type ButtonColor = 'dark' | 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'icon'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

export function Button({
  variant = 'fill',
  color = 'dark',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(styles.root, styles[variant], styles[color], styles[size], className)}
    />
  )
}
