import { InputHTMLAttributes, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      className="outline-none min-h-[2.625em] text-base placeholder:text-black-100 px-4 leading-[2.625em] w-full"
      {...props}
    />
  )
})
