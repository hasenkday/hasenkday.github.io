import * as React from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import styles from './textarea-field.module.css'

type TextAlign = 'start' | 'center' | 'end'

type TextareaFieldProps = React.ComponentProps<'textarea'> & {
  label?: string
  error?: boolean
  textAlign?: TextAlign
}

export function TextareaField({
  label,
  error = false,
  textAlign = 'start',
  className,
  id,
  value,
  defaultValue,
  placeholder,
  ...props
}: TextareaFieldProps) {
  const generatedId = React.useId()
  const textareaId = id ?? generatedId

  return (
    <div className={styles.root}>
      {/* Accessibility-only label */}
      {label && (
        <Label htmlFor={textareaId} className="sr-only">
          {label}
        </Label>
      )}

      <div className={cn(styles.wrapper, error && styles.error, styles[`align-${textAlign}`])}>
        <Textarea
          id={textareaId}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder ?? label}
          className={cn(styles.textarea, className)}
          aria-invalid={error}
          {...props}
        />
      </div>
    </div>
  )
}
