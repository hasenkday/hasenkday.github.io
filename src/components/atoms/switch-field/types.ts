type SwitchVariant = 'default' | 'outlined' | 'only' | 'icon'

export type SwitchFieldProps = {
  label?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  variant?: SwitchVariant
  onIcon?: React.ReactNode
  offIcon?: React.ReactNode
  className?: string
}
