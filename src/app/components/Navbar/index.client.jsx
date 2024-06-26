import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { UniTechLogoWhite } from "../Icons/index.client";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollTo = (elementId) => {
    // setTimeout(() => {
    //   setIsDesktopNavVisible(false);
    // }, 500);
    if (pathname == "/terms") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 1000);
    }
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [isDesktopNavVisible, setIsDesktopNavVisible] = useState(true);
  const hoverTimeoutRef = useRef(null);
  // const handleMouseEnter = () => {
  //   // Clear any existing timeout to avoid multiple setTimeout calls
  //   clearTimeout(hoverTimeoutRef.current);
  //   setIsDesktopNavVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   // Clear the timeout if the user hovers back onto the Navbar
  //   clearTimeout(hoverTimeoutRef.current);
  //   // Set a new timeout to hide the desktop nav after 3 seconds
  //   hoverTimeoutRef.current = setTimeout(() => {
  //     setIsDesktopNavVisible(false);
  //   }, 3000);
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsDesktopNavVisible(false);
  //   }, 3000);
  // }, []);
  const [isAdmin, setIsAdmin] = useState(false);

  const userEmail =
    typeof window !== "undefined" ? localStorage.getItem("email") : "";
  useEffect(() => {
    if (userEmail !== "admin@universitytech.co.za") {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
    if ( pathname &&
      pathname?.includes("admin") &&
      pathname !== "/admin" &&
      userEmail !== "admin@universitytech.co.za"
    ) {
      router.push("/");
    }
  }, [userEmail]);
  return (
    <>
      {isAdmin == false ? (
        <>
          <nav
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            className={`${
              isDesktopNavVisible ? "lg:opacity-1" : "lg:opacity-0"
            } transition-all duration-150 ease-out bg-gray-800 border-b border-white p-4 scroll-smooth sticky lg:static top-0 z-50 w-full`}
          >
            <div className="container mx-auto flex items-center justify-between">
              <button
                onClick={() => {
                  scrollTo("landing");
                }}
                className="text-yellow-500 md:flex justify-center hidden items-center md:w-40 w-64 hover:text-white font-bold text-xl"
                href="/"
              >
                <h2>UniTech</h2>{" "}
                <UniTechLogoWhite className={"h-10 text-red-500"} />
              </button>
              <div className="hidden lg:flex space-x-4">
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
                <button
                  onClick={() => {
                    router.push("/terms");
                  }}
                >
                  <p className="text-white cursor-pointer">T's & C's</p>
                </button>
              </div>
              <div className="lg:hidden flex items-center justify-between w-full">
                <button
                  onClick={() => {
                    scrollTo("landing");
                    toggleMobileMenu();
                  }}
                  className="text-yellow-500 flex justify-center  items-center w-[200px] hover:text-white font-bold text-xl"
                  href="/"
                >
                  <h2>UniTech</h2>{" "}
                  <UniTechLogoWhite className={"h-10 text-red-500"} />
                </button>
                <button
                  className="text-white focus:outline-none  float-right"
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
                <button
                  onClick={() => {
                    router.push("/terms");
                    toggleMobileMenu();
                  }}
                >
                  <p className="text-white cursor-pointer">T's & C's</p>
                </button>
              </div>
            )}
          </nav>
        </>
      ) : (
        <>
          <nav
            className={`${
              isDesktopNavVisible ? "lg:opacity-1" : "lg:opacity-0"
            } transition-all duration-150 ease-out bg-gray-800 border-b border-white p-4 scroll-smooth sticky lg:static top-0 z-50 w-full`}
          >
            <div className="container mx-auto flex items-center justify-between">
              <Link
                className="text-yellow-500 md:flex justify-center hidden items-center md:w-40 w-64 hover:text-white font-bold text-xl"
                href="/admin/dashboard"
              >
                <h2>UniTech</h2>{" "}
                <UniTechLogoWhite className={"h-10 text-red-500"} />
              </Link>
              <div className="hidden lg:flex space-x-4 items-center">
                <Link href={"/admin/clients"}>
                  <p className="text-white cursor-pointer">Clients</p>
                </Link>
                <Link href={"/admin/inventory"}>
                  <p className="text-white cursor-pointer">Inventory</p>
                </Link>
                <Link href={"/admin/money"}>
                  <p className="text-white cursor-pointer">Money</p>
                </Link>
               
                <button
                  className="bg-white p-1 rounded-md w-[100px]"
                  onClick={() => {
                    localStorage.clear();
                    router.push("/");
                  }}
                >
                  <p className="text-red-500 cursor-pointer ">Logout</p>
                </button>
              </div>
              <div className="lg:hidden flex items-center justify-between w-full">
                <button
                  onClick={() => {
                    scrollTo("landing");
                    toggleMobileMenu();
                  }}
                  className="text-yellow-500 flex justify-center  items-center w-[200px] hover:text-white font-bold text-xl"
                  href="/"
                >
                  <h2>UniTech</h2>{" "}
                  <UniTechLogoWhite className={"h-10 text-red-500"} />
                </button>
                <button
                  className="text-white focus:outline-none  float-right"
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
              <div className="md:hidden bg-gray-800 h-full text-center justify-items-center p-4 grid gap-4">
                <Link href={"/admin/clients"}>
                  <p className="text-white cursor-pointer">Clients</p>
                </Link>
                <Link href={"/admin/inventory"}>
                  <p className="text-white cursor-pointer">Inventory</p>
                </Link>
                <Link href={"/admin/money"}>
                  <p className="text-white cursor-pointer">Money</p>
                </Link>
               
                <button
                  className="bg-white p-1 rounded-md w-[100px]"
                  onClick={() => {
                    localStorage.clear();
                    router.push("/");
                  }}
                >
                  <p className="text-red-500 cursor-pointer ">Logout</p>
                </button>
              </div>
            )}
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
