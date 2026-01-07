type TagVariant = 'fill' | 'outline' | 'ghost'

type TagColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'light'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type TagProps = {
  children: React.ReactNode
  variant?: TagVariant
  color?: TagColor
  className?: string
}
