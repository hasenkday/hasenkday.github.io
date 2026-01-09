import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

import styles from './button.module.css'

type ButtonVariant = 'fill' | 'outline' | 'ghost'
type ButtonColor = 'dark' | 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'icon'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

export function Button({
  asChild = false,
  variant = 'fill',
  color = 'dark',
  size = 'md',
  className,
  onClick,
  disabled,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  const isInteractive = (!disabled && !!onClick) || (!disabled && asChild)

  return (
    <Component
      className={cn(
        styles.root,
        styles[variant],
        styles[color],
        styles[size],
        isInteractive && 'cursor-pointer',
        disabled && 'cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    />
  )
}
