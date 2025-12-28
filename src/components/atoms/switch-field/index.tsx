import * as React from 'react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

import styles from './switch-field.module.css'
import type { SwitchFieldProps } from './types'

export function SwitchField({
  label,
  checked,
  onCheckedChange,
  variant = 'default',
  onIcon,
  offIcon,
  className,
}: SwitchFieldProps) {
  const id = React.useId()

  /* ---------- OUTLINED ---------- */
  if (variant === 'outlined') {
    return (
      <Label
        htmlFor={id}
        className={cn(
          styles.wrapper,
          variant === 'outlined' && styles.outlined,
          checked && variant === 'outlined' && styles.active,
          className
        )}
      >
        <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
        {label && <p>{label}</p>}
      </Label>
    )
  }

  /* ---------- ICON ---------- */
  if (variant === 'icon') {
    return (
      <div className={cn(styles.iconWrapper, className)}>
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={styles.iconSwitch}
        />
        <div className={cn(styles.icon, checked && styles.iconChecked)}>
          {checked ? onIcon : offIcon}
        </div>
      </div>
    )
  }

  /* ---------- DEFAULT ---------- */
  return (
    <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} className={className} />
  )
}
