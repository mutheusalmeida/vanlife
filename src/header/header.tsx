import { Link, NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const nav = [
  {
    id: 0,
    label: 'Host',
    path: '/host',
  },
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
  return (
    <div className="container flex justify-between items-center mx-auto py-7 px-4">
      <h1
        className="uppercase font-black text-black text-2xl"
        aria-label="VanLife logo"
      >
        <Link to="/">#VanLife</Link>
      </h1>

      <nav className="text-black-100" aria-label="Main navigation">
        <ul className="flex gap-6 font-semibold">
          {nav.map(({ id, label, path }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) => {
                  return twMerge(
                    'hover:text-black hover:underline',
                    isActive ? 'text-black underline' : ''
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
    </div>
  )
}
