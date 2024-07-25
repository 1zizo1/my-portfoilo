
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyApp</div>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
            Home
          </NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
            Contact
          </NavLink>
          <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
            To-Do list
          </NavLink>
          <NavLink to="/hero" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
            Hero
          </NavLink>
          <div className="relative group">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Gallery
            </button>
            <div className="absolute hidden bg-gray-800 text-white group-hover:block">
              <NavLink to="/Gallary/web" className="block px-4 py-2 text-sm" >
                coursel
              </NavLink>
              <NavLink to="/Gallary/mobile" className="block px-4 py-2 text-sm" >
                Weather
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
