type CheckboxVariant = 'checkbox' | 'button'

type CheckboxOption = {
  value: string
  label: string
}

export type SingleProps = {
  variant?: CheckboxVariant
  label: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export type MultiProps = {
  variant?: CheckboxVariant
  options: CheckboxOption[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  className?: string
}

export type CheckboxFieldProps = SingleProps | MultiProps
