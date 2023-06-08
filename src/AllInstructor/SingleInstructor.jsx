import React from 'react';
import { Link } from 'react-router-dom';

const SingleInstructor = ({singleInstructor}) => {
    const {instructorImg, instructorName, information, email, studentsEnrolled} = singleInstructor
    return (
        <div className="card mt-10 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
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
          <p>Email: {email}</p>
          <p>Student Joined : {studentsEnrolled}</p>
        </div>
      </div>
    );
};

export default SingleInstructor;