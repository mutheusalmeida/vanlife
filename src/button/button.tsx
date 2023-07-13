import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  ele: ElementType
  to?: string
  children: ReactNode
}

export const Button = ({ ele: Ele, to, children }: ButtonProps) => {
  const style = twMerge(
    'font-bold bg-orange-600 px-4 h-[50px] flex justify-center rounded-md leading-[50px] text-white hover:text-gray-100 hover:bg-orange-700 transition-all'
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
