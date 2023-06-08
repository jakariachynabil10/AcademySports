import React from 'react';
import { Link } from 'react-router-dom';

const InstructorCard = ({instructor}) => {
    const {instructorImg, instructorName, information, email, studentsEnrolled} = instructor
    return (
        <div className="card mt-10 bg-base-100 shadow-xl">
        <figure>
          <img
            src={instructorImg}
            className="h-[300px]"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {instructorName}
          </h2>
          <p>{information}</p>
          <p>Student Joined : {studentsEnrolled}</p>
          <div className="card-actions justify-end">
         <Link to='/instructors'>
         <button className="btn btn-primary">See All Instructor</button>
         </Link>
          </div>
        </div>
      </div>
    );
};

export default InstructorCard;