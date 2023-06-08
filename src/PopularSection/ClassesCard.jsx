import React from "react";
import { Link } from "react-router-dom";

const ClassesCard = ({ classItem }) => {
    const {classImg, className, description, studentsEnrolled} = classItem
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
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
         <Link to='/classes'>
         <button className="btn btn-primary">See All Classes</button>
         </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
