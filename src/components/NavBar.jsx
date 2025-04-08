import React, { useState } from "react";
import { Wind, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll"; // For smooth scrolling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "aboutus" },
    { name: "Features", to: "features" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className=" bg-white dark:bg-black fixed w-full z-50 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <img className="h-32 md:h-36" src="/images/AeroBosLogo.png" alt="" />

          {/* <div className="flex items-center space-x-2">
            <Wind className="h-7 w-7 text-green-600 dark:text-green-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              AeroBos
            </span>
          </div> */}

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle + Hamburger */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
          >
            <X className="h-6 w-6 text-red-800" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
