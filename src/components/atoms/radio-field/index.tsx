import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

import styles from './radio-field.module.css'
import type { RadioFieldProps } from './types'

export function RadioField({
  options,
  value,
  onValueChange,
  variant = 'radio',
  className,
}: RadioFieldProps) {
  if (variant === 'button') {
    return (
      <div className={cn(styles.group, className)}>
        {options.map((option) => {
          const checked = value === option.value

          return (
            <button
              key={option.value}
              type="button"
              className={cn(styles.button, checked && styles.checked)}
              onClick={() => onValueChange?.(option.value)}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    )
  }

  // default radio
  return (
    <RadioGroup value={value} onValueChange={onValueChange} className={cn(styles.group, className)}>
      {options.map((option) => (
        <div key={option.value} className={styles.plain}>
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
