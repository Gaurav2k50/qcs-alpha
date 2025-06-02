import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/services" },
  { name: "Latest News", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="block transform scale-125">
          <img src={logo} alt="Logo" className="h-24 object-contain" />
        </Link>
        <ul className="flex space-x-8 text-gray-700 font-semibold">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover: text-blue-500"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
