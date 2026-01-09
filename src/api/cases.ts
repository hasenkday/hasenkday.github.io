export type CaseItem = {
  id: string
  route: string
  className: string
  backdropColor: string
  content: {
    title: string
    description: string
    badge?: string
    padded?: boolean
    titleClass: string
    descriptionClass: string
    descriptionDataSize?: 'sm'
  }
}

export const cases: CaseItem[] = [
  {
    id: 'ticomia-formaturas-app',
    route: '/cases/ticomia-formaturas-app',
    className:
      'bg-dark order-1 md:col-span-8 lg:order-1 lg:col-span-5 lg:row-span-2 hover:ring-primary',
    backdropColor: 'from-dark/80',
    content: {
      title: 'Ticomia - Formaturas App',
      description:
        'Mobile B2C app adapting complex flows to a mobile-first experience, balancing clarity, trust, and ease of use in real purchase scenarios.',
      padded: true,
      titleClass: 'md:text-h3 text-light',
      descriptionClass: 'text-light/80 md:text-md mt-4 text-sm',
    },
  },
  {
    id: 'urban-inline-skating-app',
    route: '/cases/urban-inline-skating-app',
    className: 'bg-secondary/60 order-2 md:col-span-4 lg:order-2 lg:col-span-3 lg:row-span-1',
    backdropColor: 'from-secondary/60',
    content: {
      title: 'Urban Inline Skating App',
      description:
        'Personal project exploring orientation, group flow, and shared context in urban skating meetups.',
      badge: 'Coming soon',
      titleClass: '',
      descriptionClass: 'mt-2',
      descriptionDataSize: 'sm',
    },
  },
  {
    id: 'budgeting-app-for-electricians',
    route: '/cases/budgeting-app-for-eletricians',
    className: 'bg-tertiary order-3 md:col-span-4 lg:order-3 lg:col-span-3 lg:row-span-1',
    backdropColor: 'from-tertiary',
    content: {
      title: 'Budgeting App for Electricians',
      description:
        'Academic project addressing usability issues and cognitive overload in budgeting tools for electricians.',
      badge: 'Coming soon',
      titleClass: '',
      descriptionClass: 'mt-2',
      descriptionDataSize: 'sm',
    },
  },
  {
    id: 'kodus-ai-code-review-tool',
    route: '/cases/kodus-ai-code-review-tool',
    className: 'bg-primary order-4 md:col-span-8 lg:order-4 lg:col-span-4 lg:row-span-2',
    backdropColor: 'from-primary',
    content: {
      title: 'Kodus – AI Code Review Tool',
      description:
        'Product developed by devs to help other devs · Interface design · Configuration flows · UI system transition · Wordpress',
      padded: true,
      titleClass: 'md:text-h3',
      descriptionClass: 'md:text-md mt-4 text-sm',
    },
  },
  {
    id: 'ticomia-internal-product-nda',
    route: '/cases/ticomia-internal-product-nda',
    className: 'bg-secondary/20 order-5 md:col-span-4 lg:order-5 lg:col-span-2 lg:row-span-1',
    backdropColor: 'from-secondary/20',
    content: {
      title: 'Ticomia – Internal Product (NDA)',
      description:
        'B2C and B2B products · Web & Mobile designs · Visual identity · UI system · Documentation',
      titleClass: '',
      descriptionClass: 'mt-2',
      descriptionDataSize: 'sm',
    },
  },
  {
    id: 'visual-and-graphic-projects',
    route: '/cases/visual-and-graphic-projects',
    className: 'bg-tertiary/20 order-7 md:col-span-8 lg:order-6 lg:col-span-2 lg:row-span-2',
    backdropColor: 'from-tertiary/20',
    content: {
      title: 'Visual & Graphic Projects',
      description:
        'A collection of graphic design, visual identity, packaging, and illustration projects exploring form, clarity, and communication.',
      titleClass: '',
      descriptionClass: 'mt-2',
      descriptionDataSize: 'sm',
    },
  },
  {
    id: 'learning-platform-for-developers',
    route: '/cases/learning-platform-for-devs',
    className: 'bg-secondary/20 order-6 md:col-span-4 lg:order-7 lg:col-span-2 lg:row-span-1',
    backdropColor: 'from-secondary/20',
    content: {
      title: 'Learning Platform for Developers',
      description:
        'Onboarding · Study paths · Gamification · Visual system · Illustration · Mascot',
      titleClass: '',
      descriptionClass: 'mt-2',
      descriptionDataSize: 'sm',
    },
  },
]
