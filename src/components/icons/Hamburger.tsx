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
      <path d="M18.75 5H1.25V2.5h17.5zm0 6.25H1.25v-2.5h17.5zM1.25 17.5h17.5V15H1.25z" />
    </svg>
  )
}
export default Icon
