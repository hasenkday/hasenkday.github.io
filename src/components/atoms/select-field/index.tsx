import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

import styles from './select-field.module.css'
import type { SelectFieldProps } from './types'

export function SelectField({
  label,
  placeholder,
  options,
  variant = 'default',
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className={cn(styles.root, className)}>
      {label && <Label className="sr-only">{label}</Label>}

      <Select {...props}>
        <SelectTrigger className={cn(styles.trigger, styles[`variant-${variant}`])}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
