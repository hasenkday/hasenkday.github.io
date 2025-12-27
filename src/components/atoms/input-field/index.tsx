import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import styles from './input-field.module.css'

type InputFieldProps = React.ComponentProps<'input'> & {
  label?: string
  error?: string
}

export function InputField({ label, error, className, id, ...props }: InputFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId

  return (
    <div className={styles.root}>
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <Input
        id={inputId}
        className={cn(styles.input, error && styles.error, className)}
        {...props}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}
