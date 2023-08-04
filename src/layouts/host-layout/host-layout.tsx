import { NavLink, Outlet } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

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

      <Outlet />
    </>
  )
}
