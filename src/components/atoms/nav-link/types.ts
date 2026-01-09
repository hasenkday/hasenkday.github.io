export type NavLinkProps = {
  type: 'hash' | 'route' | 'external'
  value: string
  children: React.ReactNode
  target?: string
  offset?: number
  onNavigate?: () => void
  className?: string
}
