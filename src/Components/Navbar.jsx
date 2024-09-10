import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevState) => !prevState);
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-black py-2 px-3 rounded-md"
      : "py-2 px-3 rounded-md";
  return (
    // <nav className="bg-orange-500 border-b border-b-orange-400">
    //   <div className="flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <NavLink>
    //       <img src={Logo} alt="Logo" className="w-auto h-20" />
    //     </NavLink>
    //     <div className="">
    //       <div className="hidden md:flex space-x-2 text-white">
    //         <NavLink to="/" className={linkClass}>
    //           Home
    //         </NavLink>
    //         <NavLink to="/properties" className={linkClass}>
    //           Properties
    //         </NavLink>
    //         <NavLink to="/add-properties" className={linkClass}>
    //           Sell Property
    //         </NavLink>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex fixed z-50 w-full h-20 px-4 items-center justify-between bg-orange-500 border-b border-b-orange-00">
      <div className="">
        <img src={Logo} className="w-auto h-40" alt="" />
      </div>
      <div className="hidden md:flex font-semibold">
        <ul className="flex">
          <li>
            <NavLink to="/" className={linkClass}>
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties" className={linkClass}>
              Buy Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/sell-property" className={linkClass}>
              Sell Property
            </NavLink>{" "}
          </li>
        </ul>
      </div>

      {/* RESPONSIVE */}

      <div
        className="md:hidden text-white z-50 cursor-pointer"
        onClick={handleClick}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute flex flex-col items-center justify-center top-0 right-0 h-[400px] w-[200px] mt-2 bg-orange-500"
        }
      >
        <li className="py-2 text-xl">
          <Link to="/"> Home </Link>{" "}
        </li>
        <li className="py-2 text-xl">
          {" "}
          <Link to="/properties">Buy Properties</Link>{" "}
        </li>
        <li className="py-2 text-xl">
          {" "}
          <Link to="/sell-property">Sell Property</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
