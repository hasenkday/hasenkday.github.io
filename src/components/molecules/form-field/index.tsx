import * as React from 'react'

import { cn } from '@/lib/utils'

import styles from './form-field.module.css'

type FormFieldProps = {
  label: string
  helperText?: string
  errorMessage?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function FormField({
  label,
  helperText,
  errorMessage,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn(styles.root, className)}>
      {/* Accessibility-only label */}
      <label className="sr-only">{label}</label>

      {children}

      {errorMessage ? (
        <p className={styles.errorText}>{errorMessage}</p>
      ) : (
        helperText && <p className={styles.helperText}>{helperText}</p>
      )}
    </div>
  )
}
