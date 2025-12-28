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
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        strokeWidth={2}
        d="M17.116 12.377a6.667 6.667 0 0 1-7.95-6.544c0-1.214.267-2.352.834-3.333a7.5 7.5 0 1 0 7.116 9.877Zm-3.262-9.044.037.067.067.038-.066.036-.038.068-.036-.067-.068-.038.067-.036zm3.23 3.75.147.27.269.147-.27.147-.147.27-.147-.27-.27-.147.27-.147z"
      />
    </svg>
  )
}
export default Icon
