import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type NavigateButtonProps = {
  children: ReactNode
  path: string
  className?: string
}

export const NavigateButton = ({
  children,
  path,
  className,
}: NavigateButtonProps) => {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-2 font-medium underline text-black-200 hover:text-black-100 w-max',
        className
      )}
      to={path}
    >
      {children}
    </Link>
  )
}
