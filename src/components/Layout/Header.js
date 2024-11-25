"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/About" },
    {
      name: "Services",
      path: "#",
      dropdown: [
        { name: "Web development", path: "/Services/web-development" },
        { name: "Mobile app development", path: "/Services/app-development" },
        { name: "UI/UX design", path: "/Services/ui-ux-design" },
        { name: "AI modules development ", path: "/Services/ai-modules-development" },
      ],
    },
    { name: "Careers", path: "/Careers" },
  ];

  return (
    <header className="bg-headercolor text-black px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/images/logowithslogan_transprent.png" alt="Logo" className="h-20 w-31" />
        </div>

        {/* Navbar Links for Larger Screens */}
        <nav className="hidden md:flex items-center space-x-9 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown
                onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown
              >
                <button className="flex items-center hover:text-primarycolor">
                  {link.name}
                  <span className="ml-1">▼</span>
                </button>
                {/* Dropdown Menu */}
                <div
                  className={`absolute z-10 left-0 mt-2 w-48 bg-primarycolor rounded-md shadow-lg transition-all duration-300 ${
                    isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 text-white hover:bg-hovercolor"
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
                className="hover:text-primarycolor"
              >
                {link.name}
              </Link>
            )
          )}
          {/* "Let's Talk" Button */}
          <Link
            href="/Contact"
            className="ml-4 px-4 py-2 bg-primarycolor text-white rounded-full hover:bg-hovercolor"
          >
            Let&apos;s talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="relative">
              <button
                onClick={() =>
                  setIsDropdownOpen(isDropdownOpen === link.name ? null : link.name)
                }
                className="block w-full text-left py-2 px-4 text-black hover:text-primarycolor"
              >
                {link.name}
                <span className="ml-1">▼</span>
              </button>
              {/* Mobile Dropdown Menu */}
              <div className={`pl-4 ${isDropdownOpen === link.name ? "block" : "hidden"}`}>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block py-2 px-4 text-black hover:text-primarycolor"
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
              className="block py-2 px-4 text-black hover:text-primarycolor"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          )
        )}
        {/* Mobile "Let's Talk" Button */}
        <Link
          href="/Contact"
          className="block my-2 py-2 px-4 bg-primarycolor text-white text-center rounded-full hover:bg-hovercolor"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
