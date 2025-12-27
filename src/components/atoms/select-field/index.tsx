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

type Option = {
  value: string
  label: string
}

type SelectFieldProps = {
  label?: string
  placeholder?: string
  options: Option[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function SelectField({
  label,
  placeholder,
  options,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className={cn(styles.root, className)}>
      {label && <Label>{label}</Label>}

      <Select {...props}>
        <SelectTrigger className={styles.trigger}>
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
