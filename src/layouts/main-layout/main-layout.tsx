import { Footer } from '@/footer'
import { Header } from '@/header'
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type MainLayoutProps = {
  children?: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="grid grid-rows-[auto,_1fr,_auto] grid-cols-[1fr] justify-between min-h-full w-full bg-orange-100 text-black">
      <Header />

      <main>{children ? children : <Outlet />}</main>

      <Footer />
    </div>
  )
}
