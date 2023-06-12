import React from "react";
import error from "../../public/error.json"
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
const Error = () => {
 
 
  return (
    <>
      <Lottie animationData={error} loop={true} width={10}></Lottie>
     <div className="flex justify-center">
     <Link to='/'>
      <button className="border px-8 py-5 rounded-lg bg-indigo-500 text-white">Back To Home</button>
      </Link>
     </div>
    </>
  );
};

export default Error;
