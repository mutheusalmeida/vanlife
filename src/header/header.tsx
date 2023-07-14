import { Link, NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const Header = () => {
  return (
    <div className="container flex justify-between items-center mx-auto py-7 px-8">
      <h1
        className="uppercase font-black text-black text-2xl"
        aria-label="VanLife logo"
      >
        <Link to="/">#VanLife</Link>
      </h1>

      <nav className="text-black-100" aria-label="Main navigation">
        <ul className="flex gap-6 font-semibold">
          <li>
            <NavLink
              className={({ isActive }) => {
                return twMerge(
                  'hover:text-black hover:underline',
                  isActive ? 'text-black underline' : ''
                )
              }}
              to="/host"
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return twMerge(
                  'hover:text-black hover:underline',
                  isActive ? 'text-black underline' : ''
                )
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return twMerge(
                  'hover:text-black hover:underline',
                  isActive ? 'text-black underline' : ''
                )
              }}
              to="/vans"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
