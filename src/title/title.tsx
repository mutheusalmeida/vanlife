import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleProps = {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}

export const Title = ({
  heading: Heading,
  children,
  className,
}: TitleProps) => {
  return (
    <Heading
      className={twMerge(
        'text-black text-4xl leading-[1.1666em] font-extrabold',
        className
      )}
    >
      {children}
    </Heading>
  )
}
