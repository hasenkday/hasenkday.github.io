import * as React from 'react'

import { ICON_VARIANT_COLOR } from './_icon.tokens'
import type { IconProps } from './_icon.types'

const Icon = ({ size = 20, variant = 'dark', ...props }: IconProps) => {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={ICON_VARIANT_COLOR[variant]}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4.167 4.167 11.667 11.666m-11.667 0L15.834 4.167"
      />
    </svg>
  )
}
export default Icon
