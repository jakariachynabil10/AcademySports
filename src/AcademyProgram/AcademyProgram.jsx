import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
const AcademyProgram = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-10">
        Find Your Game With the Academy Sports
      </h1>
      <div className="lg:flex flex-col justify-center items-center mx-10 mt-5 text-center">
        <div className="lg:flex justify-between items-center gap-5 py-5">
          <p>01</p>
          <h1 className="text-xl font-medium">
            Know and Understand <br /> player identity
          </h1>
          <p className="lg:w-1/2 py-4">
            Lorem ipsum dolor consectetur adipiscing tempor labore dolore lorem
            ipsum dolor mediocritatem tempor
          </p>
          <button className="border px-3 py-2 rounded-full bg-emerald-500 text-white hover:scale-105 transition duration-300">
            <FaArrowCircleUp></FaArrowCircleUp>
          </button>
        </div>
        <div className="lg:flex  justify-between items-center gap-5 py-5">
          <p>02</p>
          <h1 className="text-xl font-medium">
            Develop 360-degree <br /> player  plan
          </h1>
          <p className="lg:w-1/2 py-4">
            Lorem ipsum dolor consectetur adipiscing tempor labore dolore lorem
            ipsum dolor mediocritatem tempor
          </p>
          <button className="border px-3 py-2 rounded-full bg-emerald-500 text-white hover:scale-105 transition duration-300">
            <FaArrowCircleUp></FaArrowCircleUp>
          </button>
        </div>
        <div className="lg:flex  justify-between items-center gap-5 py-5">
          <p>03</p>
          <h1 className="text-xl font-medium">Identity player role <br /> models</h1>
          <p className="lg:w-1/2 py-4">
            Lorem ipsum dolor consectetur adipiscing tempor labore dolore lorem
            ipsum dolor mediocritatem tempor
          </p>
          <button className="border px-3 py-2 rounded-full bg-emerald-500 text-white hover:scale-105 transition duration-300">
            <FaArrowCircleUp></FaArrowCircleUp>
          </button>
        </div>
        <div className="lg:flex  justify-between items-center gap-5 py-5">
          <p>04</p>
          <h1 className="text-xl font-medium">
            Establish daily habits <br /> on  and  off the field
          </h1>
          <p className="lg:w-1/2 py-4">
            Lorem ipsum dolor consectetur adipiscing tempor labore dolore lorem
            ipsum dolor mediocritatem tempor
          </p>
          <button className="border px-3 py-2 rounded-full bg-emerald-500 text-white hover:scale-105 transition duration-300">
            <FaArrowCircleUp></FaArrowCircleUp>
          </button>
        </div>
      </div>
    </>
  );
};

export default AcademyProgram;
