import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/Image/ASO-f5325d90.png";

const Navbar = () => {
    const location = useLocation()
  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/allClasses">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/aboutUs">About US</Link>
      </li>
     <li>
     <Link to="/login">
        <button className={location.pathname === '/' ? "px-8 py-3  bg-[#9195ba] text-white rounded-md" : "px-8 py-3  bg-[#1f7a98] text-white rounded-md"}>
          Login
        </button>
      </Link>
     </li>
    </>
  );
  return (
    <>
      <div className={location.pathname === '/' ? "navbar lg:flex justify-between items-center text-white" : "navbar lg:flex justify-between items-center text-black"}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} className="w-[70px] h-[70px]" alt="" />
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Academy Sports
            </Link>
          </div>
        </div>

        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold items-center  px-1">{items}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
