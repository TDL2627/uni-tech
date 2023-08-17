import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { UniTechLogoWhite } from "../Icons/index.client";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollTo = (elementId) => {
    setTimeout(() => {
      setIsDesktopNavVisible(false);
    }, 500);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [isDesktopNavVisible, setIsDesktopNavVisible] = useState(true);
  const hoverTimeoutRef = useRef(null);
  const handleMouseEnter = () => {
    // Clear any existing timeout to avoid multiple setTimeout calls
    clearTimeout(hoverTimeoutRef.current);
    setIsDesktopNavVisible(true);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if the user hovers back onto the Navbar
    clearTimeout(hoverTimeoutRef.current);
    // Set a new timeout to hide the desktop nav after 3 seconds
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDesktopNavVisible(false);
    }, 3000);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsDesktopNavVisible(false);
  //   }, 3000);
  // }, []);

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        isDesktopNavVisible ? "md:opacity-1" : "md:opacity-0"
      } transition-all duration-150 ease-out bg-black border-b border-white p-4 scroll-smooth fixed z-50 w-full`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => {
            scrollTo("landing");
          }}
          className="text-yellow-500 flex justify-center  items-center md:w-40 w-64 hover:text-white font-bold text-xl"
          href="/"
        >
          <h2>UniTech</h2> <UniTechLogoWhite className={"h-10 text-red-500"} />
        </button>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => {
              scrollTo("about");
            }}
          >
            <p className="text-white cursor-pointer">About</p>
          </button>
          <button
            onClick={() => {
              scrollTo("products");
            }}
          >
            <p className="text-white cursor-pointer">Products</p>
          </button>
          <button
            onClick={() => {
              scrollTo("howTo");
            }}
          >
            <p className="text-white cursor-pointer">How to</p>
          </button>
          <button
            onClick={() => {
              scrollTo("testi");
            }}
          >
            <p className="text-white cursor-pointer">Testimonials</p>
          </button>
          <button
            onClick={() => {
              scrollTo("contact");
            }}
          >
            <p className="text-white cursor-pointer">Contact</p>
          </button>
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
        <div className="md:hidden bg-black h-full p-4 grid gap-4">
          <button
            onClick={() => {
              scrollTo("about");
              toggleMobileMenu();
            }}
          >
            <p className="text-white cursor-pointer">About</p>
          </button>
          <button
            onClick={() => {
              scrollTo("products");
              toggleMobileMenu();
            }}
          >
            <p className="text-white cursor-pointer">Products</p>
          </button>
          <button
            onClick={() => {
              scrollTo("howTo");
              toggleMobileMenu();
            }}
          >
            <p className="text-white cursor-pointer">How to</p>
          </button>
          <button
            onClick={() => {
              scrollTo("testi");
              toggleMobileMenu();
            }}
          >
            <p className="text-white cursor-pointer">Testimonials</p>
          </button>
          <button
            onClick={() => {
              scrollTo("contact");
              toggleMobileMenu();
            }}
          >
            <p className="text-white cursor-pointer">Contact</p>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
