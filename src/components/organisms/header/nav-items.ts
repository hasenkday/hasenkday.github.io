import type { ComponentType } from 'react'

import { GithubIcon, LinkedinIcon } from '@/components/icons'
import type { IconProps } from '@/components/icons/_icon.types'

const githubUrl = import.meta.env.VITE_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL

type NavItem = {
  name: string
  type: 'hash' | 'route' | 'external'
  value: string
  target?: string
  icon?: ComponentType<IconProps>
}

export const NavItems: NavItem[] = [
  { name: 'Cases', type: 'hash', value: 'cases' },
  { name: 'About', type: 'hash', value: 'about' },
  { name: 'Contact', type: 'hash', value: 'contact' },
  { name: 'Playground', type: 'route', value: '/playground' },
  {
    name: 'Github',
    type: 'external',
    value: githubUrl,
    target: '_blank',
    icon: GithubIcon,
  },
  {
    name: 'Linkedin',
    type: 'external',
    value: linkedinUrl,
    target: '_blank',
    icon: LinkedinIcon,
  },
]
