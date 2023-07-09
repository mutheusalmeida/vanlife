import { Footer } from '@/footer'
import { Header } from '@/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-full w-full bg-orange-100 text-black">
      <div>
        <Header />

        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
