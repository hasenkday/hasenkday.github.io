import type { Template } from '@svgr/babel-plugin-transform-svg-component'

const template: Template = ({ jsx }, { tpl }) => {
  return tpl`
    import * as React from 'react'
    import { ICON_VARIANT_COLOR } from './_icon.tokens'
    import type { IconProps } from './_icon.types'

    const Icon = ({
      size = 20,
      variant = 'dark',
      ...props
    }: IconProps) => {
      return React.cloneElement(
        ${jsx},
        {
          width: size,
          height: size,
          fill: VARIANT_COLOR[variant],
          ...props,
        }
      )
    }

    export default Icon
  `
}

export default template
