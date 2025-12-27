import * as React from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import styles from './checkbox-field.module.css'

type CheckboxFieldProps = {
  label: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function CheckboxField({ label, className, ...props }: CheckboxFieldProps) {
  const id = React.useId()

  return (
    <div className={cn(styles.root, className)}>
      <Checkbox id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}
