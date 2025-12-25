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
      <g clipPath="url(#a)">
        <path d="M10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-1.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667M9.167.833h1.666v2.5H9.167zm0 15.834h1.666v2.5H9.167zM2.929 4.107 4.107 2.93l1.768 1.768-1.178 1.178zm11.196 11.196 1.178-1.178 1.768 1.768-1.179 1.178zm1.768-12.375 1.178 1.18-1.768 1.767-1.178-1.178zM4.697 14.125l1.178 1.178-1.768 1.768-1.178-1.179zm14.47-4.958v1.666h-2.5V9.167zm-15.834 0v1.666h-2.5V9.167z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Icon
