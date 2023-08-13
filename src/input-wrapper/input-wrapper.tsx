import { ReactNode } from 'react'

type InputWrapperPros = {
  children: ReactNode
}

export const InputWrapper = ({ children }: InputWrapperPros) => {
  return (
    <div className="flex items-center relative [&>*:not(input)]:absolute [&>button:nth-of-type(1)]:right-[1em] [&>button:nth-of-type(2)]:right-[2.75em]">
      {children}
    </div>
  )
}
