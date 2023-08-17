import { ReactComponent as InfoIcon } from '@/assets/information-icon.svg'
import { ReactComponent as XMarkIcon } from '@/assets/x-mark-icon.svg'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ToastProps = {
  title?: string
  content?: string
  children?: ReactNode
  actionAltText?: string
  type?: 'error' | 'warning' | 'success'
  onOpenChange?: (open: boolean) => void
}

export const Toast = ({
  title,
  content,
  actionAltText = 'Notification action',
  children,
  type,
  onOpenChange,
  ...props
}: ToastProps) => {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        className="bg-orange-100 rounded-lg p-4 flex gap-1 items-center justify-between drop-shadow-lg shadow-gray-200 data-[state='open']:animate-slideIn data-[swipe='move']:translate-x-[var(--radix-toast-swipe-move-x)] data-[state='closed']:animate-hide data-[swipe='end']:animate-swipeOut data-[swipe='cancel']:translate-x-0 data-[swipe='cancel']:transition-[transform_200ms_ease-out]"
        onOpenChange={onOpenChange}
        {...props}
        open
      >
        <div className="flex gap-4">
          {type && (
            <div className="flex">
              <div
                className={twMerge(
                  'p-[6px] h-max rounded-[8px] overflow-hidden',
                  type === 'error'
                    ? 'bg-gradient-red text-red'
                    : type === 'success'
                    ? 'bg-gradient-green text-green'
                    : ''
                )}
              >
                <InfoIcon className="w-5" />
              </div>
            </div>
          )}

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
        </div>

        {children && (
          <ToastPrimitive.Action asChild altText={actionAltText}>
            {children}
          </ToastPrimitive.Action>
        )}

        <ToastPrimitive.Close asChild aria-label="Close">
          <button className="appearance-none p-[6px]" aria-hidden>
            <XMarkIcon className="w-5 text-black-100" />
          </button>
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className="fixed flex top-0 right-0 flex-col p-4 gap-2 w-[560px] max-w-[100vw] m-0 list-none outline-none z-[10000]" />
    </ToastPrimitive.Provider>
  )
}
