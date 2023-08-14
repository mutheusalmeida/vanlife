import { Title } from '@/title'
import { twMerge } from 'tailwind-merge'

type LoadingProps = {
  className?: string
}

export const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={twMerge('flex h-full items-center justify-center', className)}
    >
      <Title heading="h2" className="text-sm font-normal text-center">
        Loading...
      </Title>
    </div>
  )
}
