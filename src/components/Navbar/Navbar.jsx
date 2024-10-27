import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo2.png";
import DarkMode from "./DarkMode";
// import { BiPhoneCall } from "react-icons/bi";

export const Navlinks = [
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 1,
    name: "SERVICES",
    link: "/#service",
  },
 
  {
    id: 3,
    name: "PRICING",
    link: "/#pricing",
  },
  {
    id: 3,
    name: "TESTIMONIALS",
    link: "/#testimonials",
  },
  {
    id: 3,
    name: "CONTACT",
    link: "/#contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className=" fixed z-10 shadow-md w-full dark:bg-dark bg-slate-100 px-4 dark:text-white duration-300
    "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="sm:flex items-center gap-3  font-semibold text-gray-500 dark:text-gray-400 group">
            <img src={Logo} alt="" className="w-24" />
            {/* <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            +91 123456789 */}
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold  hover:text-primary duration-300  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;