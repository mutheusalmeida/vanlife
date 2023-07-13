import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  ele: ElementType
  to?: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  ele: Ele,
  to,
  children,
  className,
  variant = 'primary',
}: ButtonProps) => {
  const style = twMerge(
    'font-bold px-4 h-[3.125em] flex justify-center rounded-md leading-[3.125em] text-white transition-all',
    twMerge(
      className,
      variant === 'primary'
        ? 'bg-orange-600 hover:text-gray-100 hover:bg-orange-700'
        : 'bg-black hover:text-gray-100 hover:bg-black-200'
    )
  )

  if (to) {
    return (
      <Ele className={style} to="/vans">
        {children}
      </Ele>
    )
  }

  return <Ele className={style}>{children}</Ele>
}
