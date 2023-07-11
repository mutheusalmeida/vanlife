import { Footer } from '@/footer'
import { Header } from '@/header'
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between min-h-full w-full bg-orange-100 text-black">
      <div>
        <Header />

        {children ? children : <Outlet />}
      </div>

      <Footer />
    </div>
  )
}
