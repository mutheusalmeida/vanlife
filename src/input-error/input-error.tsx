import { ReactComponent as ExclamationIcon } from '@/assets/exclamation-icon.svg'
import * as Popover from '@radix-ui/react-popover'

type InputErrorProps = {
  message: string | undefined
}

export const InputError = ({ message }: InputErrorProps) => {
  return (
    <div className="relative">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button" className="animate-pulse appearance-none">
            <ExclamationIcon className="w-6 text-red" />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={4}
            side="bottom"
            className="rounded p-2 text-red bg-white w-max drop-shadow-md shadow-gray-100 text-xs"
          >
            <p>{message}</p>

            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
