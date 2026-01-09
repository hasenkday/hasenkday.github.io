import { Outlet, useMatches } from 'react-router-dom'

import type { RouteHandle } from '@/app/route-handles'
import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'

export function MainLayout() {
  const matches = useMatches()

  const hideFooter = matches.some((match) => (match.handle as RouteHandle | undefined)?.hideFooter)
  return (
    <div className="bg-light grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  )
}
