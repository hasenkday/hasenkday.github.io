import { Link } from 'react-router-dom'

import { scrollToId } from '@/lib/scrollTo'

import type { NavLinkProps } from './types'

export function NavLink({
  type,
  value,
  children,
  target,
  offset = 96,
  onNavigate,
  className,
}: NavLinkProps) {
  if (type === 'external') {
    return (
      <a
        href={value}
        target={target}
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {children}
      </a>
    )
  }

  const to = type === 'hash' ? { pathname: '/', hash: value } : value

  const handleClick =
    type === 'hash'
      ? () => {
          scrollToId(value, { offset })
          onNavigate?.()
        }
      : onNavigate

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
