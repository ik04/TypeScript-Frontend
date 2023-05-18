import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
type Navlink = {
  name: string;
  href: string;
};
let navLinks: Navlink[];
navLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/" },
  { name: "Resources", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-green-500">REACT.</h1>
      <ul className="hidden md:flex">
        {navLinks.map((navLink) => (
          <a href={navLink.href}>
            <li className="p-4">{navLink.name}</li>
          </a>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
            : "ease-in-out fixed left-[-100%] duration-500"
        }
      >
        <h1 className="w-full m-4 text-3xl font-bold text-green-500">REACT.</h1>
        <ul className="uppercase p-4">
          {navLinks.map((navLink) => (
            <a href={navLink.href}>
              <li className="p-4 border-b border-gray-600">{navLink.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};
