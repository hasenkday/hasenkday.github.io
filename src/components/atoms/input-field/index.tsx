import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import styles from './input-field.module.css'

type TextAlign = 'start' | 'center' | 'end'

type InputFieldProps = React.ComponentProps<'input'> & {
  label?: string
  error?: boolean
  textAlign?: TextAlign
}

export function InputField({
  label,
  error = false,
  textAlign = 'start',
  className,
  id,
  value,
  defaultValue,
  placeholder,
  ...props
}: InputFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId

  return (
    <div className={styles.root}>
      {/* sr-only label stays here OR can be removed if FormField handles it */}
      {label && (
        <Label htmlFor={inputId} className="sr-only">
          {label}
        </Label>
      )}

      <div className={cn(styles.wrapper, error && styles.error, styles[`align-${textAlign}`])}>
        <Input
          id={inputId}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder ?? label}
          className={cn(styles.input, className)}
          aria-invalid={error}
          {...props}
        />
      </div>
    </div>
  )
}
