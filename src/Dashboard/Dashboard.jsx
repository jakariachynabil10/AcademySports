import React from "react";
import {
  FaAddressBook,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useinstructor";
import useStudents from "../Hooks/useStudents";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudents] = useStudents();
  console.log(isAdmin, isInstructor, isStudents);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-black">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    <FaWallet></FaWallet> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}

            {isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">
                    {" "}
                    <FaAddressBook></FaAddressBook> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <FaWallet></FaWallet> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
            {isStudents ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment">
                    <FaCalendarAlt></FaCalendarAlt> Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClassCart">
                    <FaShoppingCart></FaShoppingCart> My Class Cart
                    <span className="badge inl badge-secondary">+</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myEnrolledClass">
                    <FaShoppingCart></FaShoppingCart> My Enrolled Class
                    <span className="badge inl badge-secondary">+</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/allClasses"> Our Classes</NavLink>
            </li>
            <li>
              <NavLink to="/allInstructors">Our Instructor</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
