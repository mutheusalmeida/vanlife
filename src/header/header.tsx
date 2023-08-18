import { ReactComponent as LogoutIcon } from '@/assets/logout-icon.svg'
import { ReactComponent as UserPlaceholderIcon } from '@/assets/user-circle-icon.svg'
import { ReactComponent as UserIcon } from '@/assets/user-icon.svg'
import { useAuth } from '@/hooks/use-auth'
import { logoutUser } from '@/resources/api'
import * as Popover from '@radix-ui/react-popover'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const nav = [
  {
    id: 1,
    label: 'About',
    path: '/about',
  },
  {
    id: 2,
    label: 'Vans',
    path: '/vans',
  },
]

export const Header = () => {
  const [openPopover, setOpenPopover] = useState(false)
  const { isLoading, data } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="container flex justify-between flex-wrap gap-2 items-center mx-auto py-7 px-4">
      <h1
        className="uppercase font-black text-black text-2xl"
        aria-label="VanLife logo"
      >
        <Link to="/">#VanLife</Link>
      </h1>

      <nav className="text-black-100" aria-label="Main navigation">
        <ul className="flex flex-wrap gap-6 font-semibold">
          {data && (
            <li className="flex items-center">
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    'hover:text-black hover:underline',
                    isActive ? 'text-black underline' : ''
                  )
                }
                to="/host"
              >
                Host
              </NavLink>
            </li>
          )}

          {nav.map(({ id, label, path }) => (
            <li className="flex items-center" key={id}>
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    'hover:text-black hover:underline',
                    isActive ? 'text-black underline' : ''
                  )
                }
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {data && (
            <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
              <Popover.Trigger asChild>
                <button className="appearance-none">
                  <UserPlaceholderIcon className="w-6 text-black-200" />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content align="end" sideOffset={4}>
                  <ul className=" rounded bg-orange-100 py-2 drop-shadow-md shadow-orange-400 text-black-200 [*>li]:cursor-pointer">
                    <li className="px-4 py-[10px]">
                      <Popover.Close asChild>
                        <Link
                          to="#"
                          className="flex appearance-none items-center gap-2"
                        >
                          <UserIcon className="w-5" />

                          <span className="text-sm leading-5">Profile</span>
                        </Link>
                      </Popover.Close>
                    </li>

                    <hr className="h-[1px] border-none my-2 bg-orange-300" />

                    <li className="px-4 py-[10px]">
                      <Popover.Close asChild>
                        <button
                          onClick={() => {
                            logoutUser()
                            navigate('/sign-in', { replace: true })
                          }}
                          className="flex appearance-none items-center gap-2"
                        >
                          <LogoutIcon className="w-5 text-red-100" />

                          <span className="text-sm leading-5 text-red-100">
                            Log out
                          </span>
                        </button>
                      </Popover.Close>
                    </li>
                  </ul>
                  <Popover.Arrow className="fill-orange-100" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          )}

          {!isLoading && !data && (
            <>
              <li className="flex items-center">
                <NavLink
                  className={({ isActive }) =>
                    twMerge(
                      'hover:text-black hover:underline',
                      isActive ? 'text-black underline' : ''
                    )
                  }
                  to="/sign-in"
                >
                  Sign in
                </NavLink>
              </li>

              <li className="flex items-center">
                <NavLink
                  className="text-white hover:text-gray-100 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md"
                  to="/sign-up"
                >
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}
