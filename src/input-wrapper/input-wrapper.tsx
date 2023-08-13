import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type InputWrapperPros = {
  children: ReactNode
  className?: string
}

export const InputWrapper = ({ children, className }: InputWrapperPros) => {
  return (
    <div
      className={twMerge(
        'flex items-center relative [&>*:not(input)]:absolute [&>*:not(input)]:flex [&>div:nth-of-type(1)]:right-[1em] [&>div:nth-of-type(2)]:right-[2.75em]',
        className
      )}
    >
      {children}
    </div>
  )
}
