import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts/main-layout'
import { CasePage } from '@/pages/case'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/case/:slug',
        element: <CasePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
