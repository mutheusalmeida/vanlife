import { ReactComponent as EyeIcon } from '@/assets/eye-icon.svg'
import { ReactComponent as EyeSlashIcon } from '@/assets/eye-slash-icon.svg'
import { ReactNode, useState } from 'react'

type ChildrenPros = {
  show: boolean
}

type ShowPasswordProps = {
  children: ({ show }: ChildrenPros) => ReactNode
}

export const ShowPassword = ({ children }: ShowPasswordProps) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow((prev) => !prev)
  }

  return (
    <>
      {children({ show })}

      <button type="button" onClick={toggleShow} className="appearance-none">
        {show ? (
          <EyeIcon className="w-6 text-gray-300" />
        ) : (
          <EyeSlashIcon className="w-6 text-gray-300" />
        )}
      </button>
    </>
  )
}
