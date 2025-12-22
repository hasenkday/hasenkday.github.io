import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts/main-layout'
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
      //   other pages goes here
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
