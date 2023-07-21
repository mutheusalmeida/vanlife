import { ReactNode } from 'react'

type VanWrapperProps = {
  children: ReactNode
}

export const VanWrapper = ({ children }: VanWrapperProps) => {
  return (
    <div className="bg-orange-100 px-4 py-11">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  )
}
