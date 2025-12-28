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

  /* ---------- ONLY ---------- */
  if (variant === 'only') {
    return (
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} className={className} />
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
        >
          {checked ? onIcon : offIcon}
        </Switch>
      </div>
    )
  }

  /* ---------- DEFAULT / OUTLINED ---------- */
  return (
    <div
      className={cn(
        styles.wrapper,
        variant === 'outlined' && styles.outlined,
        checked && variant === 'outlined' && styles.active,
        className
      )}
    >
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </div>
  )
}
