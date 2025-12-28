import * as React from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import styles from './checkbox-field.module.css'
import type { CheckboxFieldProps, SingleProps, MultiProps } from './types'

export function CheckboxField(props: CheckboxFieldProps) {
  if ('options' in props) {
    return <CheckboxGroup {...props} />
  }

  return <SingleCheckbox {...props} />
}

/* ---------- Single ---------- */

function SingleCheckbox({
  label,
  checked,
  onCheckedChange,
  variant = 'checkbox',
  className,
}: SingleProps) {
  const id = React.useId()

  if (variant === 'checkbox') {
    return (
      <div className={cn(styles.plain, className)}>
        <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
        <Label htmlFor={id}>{label}</Label>
      </div>
    )
  }

  // button variant
  return (
    <button
      type="button"
      className={cn(styles.button, checked && styles.checked, className)}
      onClick={() => onCheckedChange?.(!checked)}
    >
      {label}
    </button>
  )
}

/* ---------- Group ---------- */

function CheckboxGroup({
  options,
  value = [],
  onValueChange,
  variant = 'checkbox',
  className,
}: MultiProps) {
  function toggle(optionValue: string) {
    if (!onValueChange) return

    onValueChange(
      value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue]
    )
  }

  if (variant === 'checkbox') {
    return (
      <div className={cn(styles.group, className)}>
        {options.map((option) => {
          const id = option.value
          const checked = value.includes(option.value)

          return (
            <div key={option.value} className={styles.plain}>
              <Checkbox id={id} checked={checked} onCheckedChange={() => toggle(option.value)} />
              <Label htmlFor={id}>{option.label}</Label>
            </div>
          )
        })}
      </div>
    )
  }

  // button variant (group)
  return (
    <div className={cn(styles.group, className)}>
      {options.map((option) => {
        const checked = value.includes(option.value)

        return (
          <button
            key={option.value}
            type="button"
            className={cn(styles.button, checked && styles.checked)}
            onClick={() => toggle(option.value)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
