import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">UniTech</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-white cursor-pointer">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white cursor-pointer">About</p>
          </Link>
          <Link href="/services">
            <p className="text-white cursor-pointer">Services</p>
          </Link>
          <Link href="/contact">
            <p className="text-white cursor-pointer">Contact</p>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18.75 18.75a.75.75 0 0 1-1.06 0L12 13.06l-5.69 5.69a.75.75 0 0 1-1.06-1.06L10.94 12 5.25 6.31a.75.75 0 1 1 1.06-1.06L12 10.94l5.69-5.69a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06L13.06 12l5.69 5.69a.75.75 0 0 1 0 1.06z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 5a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75zM3 11.25a.75.75 0 0 1 .75-.75h17.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 0 1-.75-.75zM5.25 18a.75.75 0 0 1 0-1.5h13.5a.75.75 0 0 1 0 1.5H5.25z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <Link href="/">
            <p className="text-white cursor-pointer">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white cursor-pointer">About</p>
          </Link>
          <Link href="/services">
            <p className="text-white cursor-pointer">Services</p>
          </Link>
          <Link href="/contact">
            <p className="text-white cursor-pointer">Contact</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
