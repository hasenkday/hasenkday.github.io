import { createHashRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts/main-layout'
import CasePage from '@/pages/case'
import GalleryPage from '@/pages/gallery'
import HomePage from '@/pages/home'
import NotFoundPage from '@/pages/not-found'
import PlaygroundPage from '@/pages/playground'

export const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cases/:slug',
        element: <CasePage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/playground',
        element: <PlaygroundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
