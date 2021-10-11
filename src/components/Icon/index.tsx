import React from 'react'
import classNames from 'classnames'

import './icon.less'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => { 
  requireContext.keys().forEach(requireContext)
}

try {
  importAll(require.context('./svg/', true, /\.svg$/))
} catch (error) {
  console.log(error)
} 

export interface IconProps {
  readonly name: string
  className?: string
  color?: string
  style?: React.CSSProperties
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
  
  const {
    name,
    className,
    color,
    style = {},
  } = props

  if (!name) {
    return null
  }

  return (
    <svg 
      className={classNames('xt-icon', className)}
      style={{ ...style, color }}
      ref={ref}
    >
      <use xlinkHref={'#' + name}/>
    </svg>
  )
})

export default Icon
