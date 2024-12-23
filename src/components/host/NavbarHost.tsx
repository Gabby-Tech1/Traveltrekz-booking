import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import SigninOption from '../user/SigninOption';

const NavbarHost: React.FC  = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="bg-blue-600 py-4 fixed lg:sticky top-0 z-50 w-full">
      <div className="mx-4 md:mx-10 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 gap-2">
            <div className="lg:hidden md:flex justify-end">
              <button onClick={toggleNavbar} className="text-white">
                {mobileDrawerOpen ? (
                  <AiOutlineClose className="text-3xl font-bold" />
                ) : (
                  <CgMenu className="text-3xl font-bold" />
                )}
              </button>
            </div>
            <a href="/" className="text-xl md:text-2xl font-bold text-white">
              TravelTrekz
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-lg font-medium">
            <a href="/property" className="text-white hover:text-blue-100">
              Find a Property
            </a>
            <a href="#" className="text-white hover:text-blue-100">
              Share Stories
            </a>
            <a href="#" className="text-white hover:text-blue-100">
              About Us
            </a>
          </div>
          <ul className="flex items-center gap-2 lg:gap-8">
            <Link to="/" className="bg-white hidden lg:block text-blue-600 py-1 px-2 md:px-4 md:py-2 rounded-full font-medium hover:bg-blue-50 transition">
              Go To Guest Page
            </Link>
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                role="button"
                className="text-blue-600 bg-white rounded-3xl flex items-center gap-2 text-2xl px-2 py-1 lg:px-3 lg:p-2"
              >
                <RxHamburgerMenu className="font-bold hover:bg-header-200 hover:rounded-full" />
                <FaUserCircle className="text-gray-300" />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-50 w-52 shadow"
              >
                <SigninOption />
              </ul>
            </div>
          </ul>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed left-0 z-20 w-3/4 h-[95vh] p-12 flex flex-col justify-center items-center bg-blue-600 transition-all duration-300 ease-linear lg:hidden text-white gap-4">
            <Link to="/property" onClick={toggleNavbar}>
              <p>Find A Property</p>
            </Link>
            <p>Shared Stories</p>
            <p>About Us</p>
            <Link to="/" className="bg-white text-blue-600 py-1 px-2 md:px-4 md:py-2 rounded-full font-medium hover:bg-blue-50 transition">
              Back to guest 
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavbarHost