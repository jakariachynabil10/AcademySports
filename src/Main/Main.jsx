import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="bg-[#000000bb] lg:px-10">
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
