import { useUser } from '@/contexts/user-context'
import { getHostVans } from '@/resources/api'
import { FirebaseError } from 'firebase/app'
import { useCallback, useEffect, useState } from 'react'
import { NavLink, Outlet, useOutletContext } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { ErrorType, VanType } from 'vanlife'

const nav = [
  {
    id: 0,
    label: 'Dashboard',
    path: '.',
  },
  {
    id: 1,
    label: 'Income',
    path: 'income',
  },
  {
    id: 2,
    label: 'Vans',
    path: 'vans',
  },
  {
    id: 3,
    label: 'Reviews',
    path: 'reviews',
  },
]

export const HostLayout = () => {
  const [data, setData] = useState<VanType[] | null>(null)
  const [error, setError] = useState<ErrorType | null>(null)
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)

  const getData = useCallback(async () => {
    try {
      setError(null)
      setIsLoading(true)
      const data = await getHostVans<VanType[]>(user.id)

      setData(data)
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        const message =
          (err.customData?.message as string) || err.message || err.code

        setError({ message })
      }
    } finally {
      setIsLoading(false)
    }
  }, [user.id])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <div className="px-4">
        <nav
          className="container max-w-4xl mx-auto mt-8 mb-11 text-black-100"
          aria-label="Host navigation"
        >
          <ul className="flex flex-wrap gap-y-3 gap-x-6 font-semibold">
            {nav.map(({ id, path, label }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    twMerge(
                      'text-lg font-medium hover:text-black hover:underline',
                      isActive ? 'text-black underline' : ''
                    )
                  }
                  to={path}
                  end={path === '.'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Outlet context={{ data, error, isLoading }} />
    </>
  )
}

export const useHostVans = () =>
  useOutletContext<{
    data: VanType[] | null
    error: ErrorType | null
    isLoading: boolean
  }>()
