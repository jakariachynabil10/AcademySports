import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
    const location = useLocation()
  return (
    <div>
      <div className={location.pathname === '/' ? "bg-[#000000bb] lg:px-10" : "lg:px-10 "}>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="mt-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
