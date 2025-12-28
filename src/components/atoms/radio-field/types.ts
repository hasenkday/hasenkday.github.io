type RadioVariant = 'radio' | 'button'

type RadioOption = {
  value: string
  label: string
}

export type RadioFieldProps = {
  variant?: RadioVariant
  options: RadioOption[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}
