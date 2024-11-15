"use client"; // Add this directive at the top

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Define navigation links in an array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "#",
      dropdown: [
        { name: "App Development", path: "/services/app-development" },
        { name: "Web Development", path: "/services/web-development" },
      ],
    },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="bg-orange-100 text-black px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <img src="/images/logowithslogan_transprent.png" alt="Logo" className="h-13 w-40" />
        </div>

        {/* Navbar Links for Larger Screens */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center hover:text-gray-400">
                  {link.name}
                  <span className="ml-1">▼</span>
                </button>
                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-opacity duration-300 ${
                    isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.name} href={link.path} className="hover:text-gray-400">
                {link.name}
              </Link>
            )
          )}
          {/* "Let's Talk" Button */}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="block w-full text-left py-2 px-4 text-white hover:text-gray-400"
              >
                {link.name}
                <span className="ml-1">▼</span>
              </button>
              {/* Mobile Dropdown Menu */}
              <div
                className={`pl-4 ${isDropdownOpen ? "block" : "hidden"}`}
              >
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block py-2 px-4 text-white hover:text-gray-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.path}
              className="block py-2 px-4 text-white hover:text-gray-400"
            >
              {link.name}
            </Link>
          )
        )}
        {/* Mobile "Let's Talk" Button */}
        <Link
          href="/contact"
          className="block my-2 py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-500"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
