import type * as React from 'react'

export type IconVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'dark'
  | 'light'
  | 'linkedin'

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  variant?: IconVariant
}
