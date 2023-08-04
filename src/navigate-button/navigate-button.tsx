import { ReactNode } from 'react'
import { Link, RelativeRoutingType } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type NavigateButtonProps = {
  children: ReactNode
  path: string
  className?: string
  relative?: RelativeRoutingType
}

export const NavigateButton = ({
  children,
  path,
  className,
  relative = 'route',
}: NavigateButtonProps) => {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-2 font-medium underline text-black-200 hover:text-black-100 w-max',
        className
      )}
      to={path}
      relative={relative}
    >
      {children}
    </Link>
  )
}
