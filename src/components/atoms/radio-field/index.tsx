import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

import styles from './radio-field.module.css'
import type { RadioFieldProps } from './types'

export function RadioField<T extends string>({
  label,
  options,
  value,
  onValueChange,
  variant = 'radio',
  className,
}: RadioFieldProps<T>) {
  return (
    <div className={cn(styles.root, className)}>
      {label && <p className={styles.label}>{label}</p>}

      {/* ===== SEGMENTED ===== */}
      {variant === 'segmented' && (
        <div className={styles.segmented} data-count={options.length}>
          <div
            className={styles.indicator}
            style={{
              transform: `translateX(${options.findIndex((o) => o.value === value) * 100}%)`,
            }}
          />

          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={cn(styles.segment, value === option.value && styles.active)}
              onClick={() => onValueChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* ===== BUTTON ===== */}
      {variant === 'button' && (
        <div className={styles.group}>
          {options.map((option) => {
            const checked = value === option.value

            return (
              <button
                key={option.value}
                type="button"
                className={cn(styles.button, checked && styles.checked)}
                onClick={() => onValueChange(option.value)}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      )}

      {/* ===== RADIO (DEFAULT) ===== */}
      {variant === 'radio' && (
        <RadioGroup value={value} onValueChange={onValueChange} className={styles.group}>
          {options.map((option) => (
            <div key={option.value} className={styles.plain}>
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  )
}
