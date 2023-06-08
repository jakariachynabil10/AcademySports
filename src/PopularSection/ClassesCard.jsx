import React from "react";
import { Link } from "react-router-dom";

const ClassesCard = ({ classItem }) => {
    const {classImg, className, description, studentsEnrolled} = classItem
  return (
    <>
      <div className="card mt-10 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
        <figure>
          <img
            src={classImg}
            className="h-[300px]"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {className}
          </h2>
          <p>{description}</p>
          <p>Student Enrolled : {studentsEnrolled}</p>
          <div className="card-actions justify-end">
         <Link to='/allClasses'>
         <button className="px-8 py-3  bg-[#0c0769] text-white rounded-md">
         See All Classes
        </button>
         </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
