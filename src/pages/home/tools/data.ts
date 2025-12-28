import type { Tool } from './types'

export const initialTools: Omit<Tool, 'x' | 'y'>[] = [
  {
    id: 'figma',
    label: 'Figma',
    stack: 'Visual & Motion',
  },
  {
    id: 'after-effects',
    label: 'After Effects',
    stack: 'Visual & Motion',
  },
  {
    id: 'react',
    label: 'React',
    stack: 'Dev Context',
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    stack: 'Dev Context',
  },
  {
    id: 'framer',
    label: 'Framer',
    stack: 'Prototyping',
  },
  {
    id: 'notion',
    label: 'Notion',
    stack: 'Core UX',
  },
  {
    id: 'figjam',
    label: 'FigJam',
    stack: 'Core UX',
  },
  {
    id: 'jira',
    label: 'Jira',
    stack: 'Delivery',
  },
]
