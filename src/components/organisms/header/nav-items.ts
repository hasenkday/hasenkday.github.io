import type { ComponentType } from 'react'

import { GithubIcon, LinkedinIcon } from '@/components/icons'
import type { IconProps } from '@/components/icons/_icon.types'

const githubUrl = import.meta.env.VITE_GITHUB_URL
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL

export type NavItem = {
  name: string
  url: string
  target?: string
  scrollTo?: string
  icon?: ComponentType<IconProps>
}

export const NavItems: NavItem[] = [
  {
    name: 'Cases',
    url: '/',
    scrollTo: 'cases',
  },
  {
    name: 'About',
    url: '/',
    scrollTo: 'about',
  },
  {
    name: 'Contact',
    url: '/',
    scrollTo: 'contact',
  },
  {
    name: 'Playground',
    url: '/playground',
  },
  {
    name: 'Github',
    url: githubUrl,
    target: '_blank',
    icon: GithubIcon,
  },
  {
    name: 'Linkedin',
    url: linkedinUrl,
    target: '_blank',
    icon: LinkedinIcon,
  },
]
