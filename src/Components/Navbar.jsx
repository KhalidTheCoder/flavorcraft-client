import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigation } from "react-router";
import logo from "../assets/FlavorCraft.jpg";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <header className="bg-[#A31621] text-[#FCF7F8] shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-8 h-16">
          <div className="text-2xl flex gap-2 justify-center items-center font-bold tracking-wide hover:text-white transition duration-300">
            <img className="w-[45px] h-[45px] rounded-4xl" src={logo} alt="" />
            FlavorCraft
          </div>

          <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            <NavLink to="/" className="relative group transition duration-300">
              <span className="hover:text-white">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/recipes"
              className="relative group transition duration-300"
            >
              <span className="hover:text-white">All Recipes</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/add-recipes"
              className="relative group transition duration-300"
            >
              <span className="hover:text-white">Add Recipe</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/my-recipes"
              className="relative group transition duration-300"
            >
              <span className="hover:text-white">My Recipes</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            {/* <div className="relative hidden md:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-[#FCF7F8] opacity-70"
                >
                  <path d="M479.6,399.716l-81.084-81.084...Z"></path>
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-3 py-1.5 bg-[#FCF7F8] text-black text-sm rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white"
              />
            </div> */}

            {/* <div className="flex items-center space-x-2">
              <Link to="/login">
                <button className="text-sm cursor-pointer font-semibold hover:scale-105 transform hover:text-white transition duration-300">
                  Login
                </button>
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 bg-[#FCF7F8] text-[#A31621] rounded-md text-sm font-semibold transition duration-300 hover:bg-white hover:scale-105 transform"
              >
                Register
              </Link>
            </div> */}

            {user ? (
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 p-4 space-y-2">
                    <p className="text-sm font-semibold">{user.displayName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <button
                      onClick={logOut}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <button className="text-sm font-semibold hover:scale-105 transform hover:text-white transition duration-300">
                    Login
                  </button>
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1.5 bg-[#FCF7F8] text-[#A31621] rounded-md text-sm font-semibold transition duration-300 hover:bg-white hover:scale-105 transform"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-[#FCF7F8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {isLoading && (
        <span className="loading loading-infinity loading-xl"></span>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#A31621] text-[#FCF7F8] px-4 py-2 space-y-2">
          <NavLink to="/" className="block font-medium hover:text-white">
            Home
          </NavLink>
          <NavLink to="/recipes" className="block font-medium hover:text-white">
            All Recipes
          </NavLink>
          <NavLink
            to="/add-recipes"
            className="block font-medium hover:text-white"
          >
            Add Recipe
          </NavLink>
          <NavLink
            to="/my-recipes"
            className="block font-medium hover:text-white"
          >
            My Recipes
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
