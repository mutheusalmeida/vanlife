import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { VanType } from 'vans'

type VanLabelProps = {
  ele: ElementType
} & Pick<VanType, 'type'>

export const VanLabel = ({ type, ele: Ele }: VanLabelProps) => {
  return (
    <Ele
      className={twMerge(
        'flex font-medium justify-center items-center h-[2.125em] min-w-[5.375em] leading-[2.125em] max-w-max rounded-md text-orange-200 capitalize px-2',
        type === 'simple'
          ? 'bg-orange'
          : type === 'luxury'
          ? 'bg-black'
          : 'bg-green'
      )}
    >
      {type}
    </Ele>
  )
}
