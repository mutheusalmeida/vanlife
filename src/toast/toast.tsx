import { ReactComponent as XMarkIcon } from '@/assets/x-mark-icon.svg'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { ReactNode } from 'react'

type ToastProps = {
  title?: string
  content?: string
  children?: ReactNode
  actionAltText?: string
}

export const Toast = ({
  title,
  content,
  actionAltText = 'Notification action',
  children,
  ...props
}: ToastProps) => {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        className="bg-white rounded-lg border border-gray-100 p-4 flex gap-1 items-center justify-between drop-shadow-lg shadow-gray-200 data-[state='open']:animate-slideIn"
        {...props}
      >
        <div className="flex flex-col gap-1">
          {title && (
            <ToastPrimitive.Title className="text-sm font-semibold">
              {title}
            </ToastPrimitive.Title>
          )}

          <ToastPrimitive.Description asChild>
            <p className="text-black-100 text-sm">{content}</p>
          </ToastPrimitive.Description>
        </div>

        {children && (
          <ToastPrimitive.Action asChild altText={actionAltText}>
            {children}
          </ToastPrimitive.Action>
        )}

        <ToastPrimitive.Close aria-label="Close">
          <button className="appearance-none p-[6px]" aria-hidden>
            <XMarkIcon className="w-5 text-black-100" />
          </button>
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className="fixed flex top-0 right-0 flex-col p-4 gap-2 w-[560px] max-w-[100vw] m-0 list-none outline-none z-[10000]" />
    </ToastPrimitive.Provider>
  )
}
