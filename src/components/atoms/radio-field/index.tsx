import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

import styles from './radio-field.module.css'

type Option = {
  value: string
  label: string
}

type RadioFieldProps = {
  label?: string
  options: Option[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function RadioField({ label, options, className, ...props }: RadioFieldProps) {
  return (
    <div className={cn(styles.root, className)}>
      {label && <Label>{label}</Label>}

      <RadioGroup {...props} className={styles.group}>
        {options.map((option) => (
          <div key={option.value} className={styles.item}>
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
