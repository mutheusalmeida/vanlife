import { Header } from '@/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="h-full w-full bg-orange-100">
      <Header />

      <Outlet />
    </div>
  )
}
