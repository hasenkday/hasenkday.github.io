import * as React from 'react'

import { ICON_VARIANT_COLOR } from './_icon.tokens'
import type { IconProps } from './_icon.types'

const Icon = ({ size = 20, variant = 'dark', ...props }: IconProps) => {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={ICON_VARIANT_COLOR[variant]}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.654 4.357A.38.38 0 0 1 3 4.124h6a.375.375 0 0 1 .265.64l-3 3a.375.375 0 0 1-.53 0l-3-3a.38.38 0 0 1-.081-.409"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default Icon
