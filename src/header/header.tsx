import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="container flex justify-between items-center mx-auto py-7 px-8">
      <h1 className="uppercase font-black text-2xl hover:underline" aria-label="VanLife logo">
        <Link to="/">
          #VanLife
        </Link>
      </h1>

      <nav className="text-black-100" aria-label="Main navigation">
        <ul className="flex gap-6 font-semibold">
          <li><Link className="hover:underline" to="/about">About</Link></li>
          <li><Link className="hover:underline" to="/vans">Vans</Link></li>
        </ul>
      </nav>
    </div>
  )
}
