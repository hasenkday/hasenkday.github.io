import * as React from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import styles from './textarea-field.module.css'

type TextareaFieldProps = React.ComponentProps<'textarea'> & {
  label?: string
  error?: string
}

export function TextareaField({ label, error, className, id, ...props }: TextareaFieldProps) {
  const generatedId = React.useId()
  const textareaId = id ?? generatedId

  return (
    <div className={styles.root}>
      {label && <Label htmlFor={textareaId}>{label}</Label>}

      <Textarea
        id={textareaId}
        className={cn(styles.textarea, error && styles.error, className)}
        {...props}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}
