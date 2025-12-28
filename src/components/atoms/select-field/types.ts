export type SelectOption = {
  value: string
  label: string
}

export type SelectVariant = 'default' | 'ghost'

export type SelectFieldProps = {
  label?: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  onValueChange?: (value: string) => void
  variant?: SelectVariant
  className?: string
}
