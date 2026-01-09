import type { ComponentType } from 'react'

import { GithubIcon, LinkedinIcon } from '@/components/icons'
import type { IconProps } from '@/components/icons/_icon.types'

const githubUrl = import.meta.env.VITE_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL

type NavItem = {
  name: string
  target?: string
  href: string
  icon?: ComponentType<IconProps>
}

export const NavItems: NavItem[] = [
  {
    name: 'Cases',
    href: '/#cases',
  },
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Contact',
    href: '/#contact',
  },
  {
    name: 'Playground',
    href: '/playground',
  },
  {
    name: 'Github',
    href: githubUrl,
    target: '_blank',
    icon: GithubIcon,
  },
  {
    name: 'Linkedin',
    href: linkedinUrl,
    target: '_blank',
    icon: LinkedinIcon,
  },
]
