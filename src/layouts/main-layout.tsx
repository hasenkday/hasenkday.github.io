import { useEffect } from 'react'

import { Outlet, useMatches } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import type { RouteHandle } from '@/app/route-handles'
import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import { scrollToHash } from '@/lib/scrollTo'

export function MainLayout() {
  const matches = useMatches()
  const { hash } = useLocation()

  useEffect(() => {
    scrollToHash(hash, { offset: 96 })
  }, [hash])

  const hideFooter = matches.some((match) => (match.handle as RouteHandle | undefined)?.hideFooter)
  return (
    <div className="bg-light grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  )
}
