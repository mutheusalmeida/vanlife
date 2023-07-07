import { Header } from '@/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="container">
      <Header />

      <Outlet />
    </div>
  )
}
