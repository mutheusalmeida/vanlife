import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type VanWrapperProps = {
  children: ReactNode
  className?: string
}

export const VanWrapper = ({ children, className }: VanWrapperProps) => {
  return (
    <div className={twMerge('px-4 py-11', className)}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  )
}
