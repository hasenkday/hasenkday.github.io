import * as React from 'react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

import styles from './switch-field.module.css'

type SwitchFieldProps = {
  label?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function SwitchField({ label, className, ...props }: SwitchFieldProps) {
  const id = React.useId()

  return (
    <div className={cn(styles.root, className)}>
      <Switch id={id} {...props} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </div>
  )
}
