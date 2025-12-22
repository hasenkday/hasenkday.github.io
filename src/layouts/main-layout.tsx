import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <>
      {/* header / nav aqui */}
      <Outlet />
      {/* footer aqui */}
    </>
  )
}
