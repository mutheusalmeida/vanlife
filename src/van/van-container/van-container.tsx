import { ReactNode } from 'react'

type VanContainerProps = {
  children: ReactNode
}

export const VanContainer = ({ children }: VanContainerProps) => {
  return <div className="flex flex-col gap-4">{children}</div>
}
