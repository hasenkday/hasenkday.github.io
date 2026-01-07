type RadioVariant = 'radio' | 'button' | 'segmented'

type RadioOption<T extends string> = {
  value: T
  label: string
}

export type RadioFieldProps<T extends string> = {
  label?: string
  variant?: RadioVariant
  options: RadioOption<T>[]
  value: T
  onValueChange: (value: T) => void
  className?: string
}
