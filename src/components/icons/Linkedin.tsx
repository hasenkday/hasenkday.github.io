import * as React from 'react'

import { ICON_VARIANT_COLOR } from './_icon.tokens'
import type { IconProps } from './_icon.types'

const Icon = ({ size = 20, variant = 'linkedin', ...props }: IconProps) => {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={ICON_VARIANT_COLOR[variant]}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2.4A9.6 9.6 0 0 0 2.4 12a9.6 9.6 0 0 0 9.6 9.6 9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 12 2.4M9.65 15.979H7.706V9.723H9.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607h-1.945v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699z" />
    </svg>
  )
}
export default Icon
