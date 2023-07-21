import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type VanLinkProps = {
  path: string
  children: ReactNode
}

export const VanLink = ({ path, children }: VanLinkProps) => {
  return (
    <Link
      className="hover:text-black-100 hover:underline transition-colors"
      to={path}
    >
      {children}
    </Link>
  )
}
