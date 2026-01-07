export type SelectOption<T extends string> = {
  value: T
  label: string
}

export type SelectFieldProps<T extends string = string> = {
  label?: string
  placeholder?: string
  options: SelectOption<T>[]
  value?: T
  onValueChange?: (value: T) => void
  variant?: 'default' | 'ghost'
  className?: string
  triggerClassName?: string
}
