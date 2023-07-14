import { NavLink, Outlet, matchPath, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const nav = [
  {
    id: 0,
    label: 'Dashboard',
    path: '/host',
  },
  {
    id: 1,
    label: 'Income',
    path: '/host/income',
  },
  {
    id: 2,
    label: 'Vans',
    path: '/host/vans',
  },
  {
    id: 3,
    label: 'Reviews',
    path: '/host/reviews',
  },
]

export const HostLayout = () => {
  const location = useLocation()

  return (
    <div>
      <nav
        className="container max-w-4xl mx-auto px-4 mt-8 mb-11 text-black-100"
        aria-label="Host navigation"
      >
        <ul className="flex flex-wrap gap-y-3 gap-x-6 font-semibold">
          {nav.map(({ id, path, label }) => (
            <li key={id}>
              <NavLink
                className={() => {
                  const isActive = matchPath(location.pathname, path)

                  return twMerge(
                    'text-lg font-medium hover:text-black hover:underline',
                    isActive ? 'text-black underline font-bold' : ''
                  )
                }}
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
