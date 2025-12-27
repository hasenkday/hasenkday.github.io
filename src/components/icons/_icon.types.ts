import type * as React from 'react'

export type IconVariant =
  | 'light'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'success'
  | 'linkedin'

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  variant?: IconVariant
}
