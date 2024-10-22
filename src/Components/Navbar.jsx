import { NavLink, useLocation, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(isHome && window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleClick = () => setNav((prev) => !prev);

  const linkClass = ({ isActive }) =>
    `py-2 px-3 rounded-md ${isActive ? "bg-white text-black" : ""}`;

  const navbarClass = `flex fixed z-10 w-full h-20 px-4 items-center justify-between ${
    isHome ? (scrollNav ? "bg-orange-500" : "bg-transparent") : "bg-orange-500"
  }`;

  const mobileMenuClass = `absolute flex flex-col items-center justify-center top-0 right-0 h-[400px] w-[200px] mt-2 bg-orange-500 ${
    nav ? "" : "hidden"
  }`;

  const mobileLinkClass = "py-2 text-xl";

  return (
    <nav className={navbarClass}>
      <div>
        <img src={Logo} className="w-auto h-40" alt="nav-logo" />
      </div>
      <div className="hidden md:flex font-semibold">
        <ul className="flex">
          {["Home", "Buy Properties", "Sell Property"].map((item, index) => (
            <li key={index}>
              <NavLink
                to={
                  index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className={linkClass}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="md:hidden text-white z-50 cursor-pointer"
        onClick={handleClick}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={mobileMenuClass}>
        {["Home", "Buy Properties", "Sell Property"].map((item, index) => (
          <li key={index} className={mobileLinkClass}>
            <Link
              to={
                index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`
              }
              onClick={handleClick}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
