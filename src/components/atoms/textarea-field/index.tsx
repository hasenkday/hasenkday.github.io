import * as React from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import styles from './textarea-field.module.css'

type TextAlign = 'start' | 'center' | 'end'

type TextareaFieldProps = React.ComponentProps<'textarea'> & {
  label?: string
  error?: string
  textAlign?: TextAlign
}

export function TextareaField({
  label,
  error,
  textAlign = 'start',
  className,
  id,
  value,
  defaultValue,
  onChange,
  ...props
}: TextareaFieldProps) {
  const generatedId = React.useId()
  const textareaId = id ?? generatedId

  const [internalValue, setInternalValue] = React.useState((value ?? defaultValue ?? '') as string)

  const isControlled = value !== undefined
  const hasValue = isControlled ? String(value).length > 0 : internalValue.length > 0

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }
    onChange?.(e)
  }

  return (
    <div className={styles.root}>
      {label && (
        <Label htmlFor={textareaId} className="sr-only">
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
        <Textarea
          id={textareaId}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={cn(styles.textarea, className)}
          aria-invalid={!!error}
          {...props}
        />
      </div>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}
