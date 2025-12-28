import * as React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import styles from './input-field.module.css'

type TextAlign = 'start' | 'center' | 'end'

type InputFieldProps = React.ComponentProps<'input'> & {
  label?: string
  error?: string
  textAlign?: TextAlign
}

export function InputField({
  label,
  error,
  textAlign = 'start',
  className,
  id,
  value,
  defaultValue,
  onChange,
  ...props
}: InputFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId

  const [internalValue, setInternalValue] = React.useState((value ?? defaultValue ?? '') as string)

  const isControlled = value !== undefined
  const hasValue = isControlled ? String(value).length > 0 : internalValue.length > 0

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }
    onChange?.(e)
  }

  return (
    <div className={styles.root}>
      {label && (
        <Label htmlFor={inputId} className="sr-only">
          {label}
        </Label>
      )}

      <div
        className={cn(
          styles.wrapper,
          hasValue && styles.filled,
          error && styles.error,
          styles[`align-${textAlign}`]
        )}
      >
        <Input
          id={inputId}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={cn(styles.input, className)}
          aria-invalid={!!error}
          {...props}
        />
      </div>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}
