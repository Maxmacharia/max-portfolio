import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
          My Projects
        </Link>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
