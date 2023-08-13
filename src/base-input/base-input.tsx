import { ReactNode } from 'react'

type BaseInputPros = {
  children: ReactNode
}

export const BaseInput = ({ children }: BaseInputPros) => {
  return (
    <div className="flex items-center relative [&>*:not(input)]:absolute [&>button:nth-of-type(1)]:right-[1em] [&>button:nth-of-type(2)]:right-[2em]">
      {children}
    </div>
  )
}
