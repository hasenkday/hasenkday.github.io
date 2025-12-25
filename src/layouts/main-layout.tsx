import { Outlet } from 'react-router-dom'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'

export function MainLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
